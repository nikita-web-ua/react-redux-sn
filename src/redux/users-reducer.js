const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL = 'SET_TOTAL'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SHOW_PRELOADER = 'SHOW_PRELOADER'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [ ],
    currentPage: 1,
    pageSize : 5,
    totalCount: 0,
    isFetching: false,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
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

export const follow = (userId) => ({type:FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotal = (totalCount) => ({type: SET_TOTAL, totalCount})
export const setCurrentPage = (p) => ({type: SET_CURRENT_PAGE, currentPage: p})
export const showPreloader = (preloaderToggle) => ({type: SHOW_PRELOADER, preloaderToggle})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export default usersReducer
