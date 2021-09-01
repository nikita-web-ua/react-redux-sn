import {createSelector} from "reselect";

const getUsersList = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersList,
    (users) => {
    // difficult calculations (for, math, big arrays... )
    return users.filter( u => true)})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}