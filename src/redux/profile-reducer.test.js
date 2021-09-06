import profileReducer, {addPost} from "./profile-reducer";

// 1. Test data
let state = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ]
}
// 2. action
let action = addPost('test')


it ('Add new post test', () => {
    let newState = profileReducer(state,action)
    // 3. Expectation
    expect(newState.posts.length).toBe(3)

})

it ('New post text', () => {
    let newState = profileReducer(state, action)
    expect (newState.posts[2].message).toBe('test')
})