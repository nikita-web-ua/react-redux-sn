import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersList = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersList,
    (users) => {
    return users.filter( u => true)})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getFilter = (state: AppStateType) => {
    return state.usersPage.filter
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}