import axios from "axios";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

let initialState = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ],
    newPostText: "",
    profileData: null
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
        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.profileData
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
export const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData})

export const getProfileData = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileData(userId)
            .then((response) => {
                dispatch(setProfileData(response.data))
            })
    }
}



export default profileReducer;