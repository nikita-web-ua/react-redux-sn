 import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let initialState = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ],
    profileData: null,
    profileStatus: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.text,
                likesCounter: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
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

export const addPost = (postText) => ({type: ADD_POST, text: postText})

export const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData})
const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const getProfileData = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfileData(userId)
                dispatch(setProfileData(response.data))
    }
}

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfileStatus(userId)
                dispatch(setProfileStatus(response.data))
    }
}

export const updateProfileStatus = (status) => {
    return async  (dispatch) => {
        let response = await profileAPI.updateProfileStatus(status)
                if(response.data.resultCode === 0){
                    dispatch(setProfileStatus(status))
                }
    }
}

export default profileReducer;