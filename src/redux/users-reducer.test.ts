import usersReducer, {InitialStateType, actions} from "./users-reducer";

let state: InitialStateType

beforeEach( () => {
    state = {
        users: [
            {id: 0, name: "User 0", status: "status 0", photos: {small: null, large: null}, followed: true},
            {id: 1, name: "User 1", status: "status 1", photos: {small: null, large: null}, followed: false},
            {id: 2, name: "User 2", status: "status 2", photos: {small: null, large: null}, followed: false},
            {id: 3, name: "User 3", status: "status 3", photos: {small: null, large: null}, followed: true},
        ],
        currentPage: 1,
        pageSize: 5,
        totalCount: 0,
        isFetching: false,
        followingInProgress: [],
        filter: {
            term: '',
            friend: null as null | boolean
        },
    }
})

test("followSuccess AC change users.followed status", () => {
    let newState = usersReducer(state,  actions.followSuccess(1))

    expect(newState.users[0].followed).toBeTruthy()
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[2].followed).toBe(false)
})

test("unfollowSuccess AC change users.followed status", () => {
    let newState = usersReducer(state,  actions.unfollowSuccess(0))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeFalsy()
})