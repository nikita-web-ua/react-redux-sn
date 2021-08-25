import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ],
    newPostText: "",
    profileData: null,
    profileStatus: '',
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
        case SET_PROFILE_STATUS: {
            return{
                ...state,
                profileStatus: action.status
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
const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const getProfileData = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileData(userId)
            .then((response) => {
                dispatch(setProfileData(response.data))
            })
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then((response) => {
                dispatch(setProfileStatus(response.data))
            })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then((response) => {
                if(response.data.resultCode === 0){
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

export default profileReducer;