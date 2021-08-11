const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCounter: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }
        default:
            return state
    }


}

export const addPost = () => ({type: ADD_POST})

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}

export default profileReducer;