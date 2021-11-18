import {usersAPI} from "../api/api";
import {photosType, userType} from "../types/types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL = 'SET_TOTAL'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SHOW_PRELOADER = 'SHOW_PRELOADER'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


let initialState = {
    users: [ ] as Array<userType>,
    currentPage: 1,
    pageSize : 5,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [] as Array<number> // array of users ids
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_TOTAL:
            return {
                ...state, totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SHOW_PRELOADER:
            return {
                ...state, isFetching: action.preloaderToggle
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter( (id) => id != action.userId)
            }
        default:
            return state
    }
}

type followSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId: number): followSuccessActionType => ({type:FOLLOW, userId})
type unfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessActionType => ({type: UNFOLLOW, userId})
type setUsersSuccessActionType = {
    type: typeof SET_USERS,
    users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersSuccessActionType => ({type: SET_USERS, users})
type setTotalActionType = {
    type: typeof SET_TOTAL,
    totalCount: number
}
export const setTotal = (totalCount: number): setTotalActionType => ({type: SET_TOTAL, totalCount})
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage : number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
type showPreloaderActionType = {
    type: typeof SHOW_PRELOADER,
    preloaderToggle: boolean
}
export const showPreloader = (preloaderToggle: boolean): showPreloaderActionType => ({type: SHOW_PRELOADER, preloaderToggle})
type toggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching: boolean,
    userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): toggleFollowingInProgressActionType => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})


export const getUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(showPreloader(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(showPreloader(false))
        dispatch(setUsers(data.items))
        dispatch(setTotal(data.totalCount))
    };
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))

}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export default usersReducer
