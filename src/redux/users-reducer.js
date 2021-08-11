const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL = 'SET_TOTAL'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let initialState = {
    users: [ ],
    currentPage: 1,
    pageSize : 5,
    totalCount: 0
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
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }


        default:
            return state
    }
}

export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setTotalAC = (totalCount) => ({type: SET_TOTAL, totalCount})
export const setCurrentPageAC = (p) => ({type: SET_CURRENT_PAGE, currentPage: p})


export default usersReducer
