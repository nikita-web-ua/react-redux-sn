import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";

let initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    pageSize: 5,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users ids
}

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "users/SET_USERS":
            return {
                ...state, users: action.users
            }
        case "users/SET_TOTAL":
            return {
                ...state, totalCount: action.totalCount
            }
        case "users/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "users/SHOW_PRELOADER":
            return {
                ...state, isFetching: action.preloaderToggle
            }
        case "users/TOGGLE_FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id != action.userId)
            }
        default:
            return state
    }
}

export const actions = {
    followSuccess: (userId: number) => ({type: "users/FOLLOW", userId} as const),
    unfollowSuccess: (userId: number) => ({type: "users/UNFOLLOW", userId} as const),
    setUsers: (users: Array<UserType>) => ({type: "users/SET_USERS", users} as const),
    setTotal: (totalCount: number) => ({type: "users/SET_TOTAL", totalCount} as const),
    setCurrentPage: (currentPage: number) => ({
        type: "users/SET_CURRENT_PAGE",
        currentPage: currentPage
    }) as const,
    showPreloader: (preloaderToggle: boolean) => ({
        type: "users/SHOW_PRELOADER",
        preloaderToggle
    } as const),
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
        type: "users/TOGGLE_FOLLOWING_IN_PROGRESS",
        isFetching,
        userId
    } as const)
}

export const getUsers = (currentPage: number, pageSize: number):ThunkType => {
    return async (dispatch) => {
        dispatch(actions.showPreloader(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(actions.showPreloader(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotal(data.totalCount))
    };
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId))

}

export const unfollow = (userId: number):ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}

export const follow = (userId: number):ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}

export default usersReducer

type initialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
