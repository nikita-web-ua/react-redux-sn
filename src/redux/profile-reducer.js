 import {profileAPI, usersAPI} from "../api/api";
 import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

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
        case SAVE_PHOTO_SUCCESS: {
            return{
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            }
        }
        default:
            return state
    }


}

export const addPost = (postText) => ({type: ADD_POST, text: postText})
export const setProfileData = (profileData) => ({type: SET_PROFILE_DATA, profileData})
const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


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

 export const updateProfileStatus = (status) => async (dispatch) => {
     try {
         let response = await profileAPI.updateProfileStatus(status)
         if (response.data.resultCode === 0) {
             dispatch(setProfileStatus(status))
         }
     } catch (error) {
        alert('some error accured')
         console.error(error)
     }
 }

 export const uploadPhoto = (file) => {
     return async  (dispatch) => {
         let response = await profileAPI.savePhoto(file)
         if(response.data.resultCode === 0){
             dispatch(savePhotoSuccess(response.data.data.photos))
         }
     }
 }

 export const saveProfile = (profileData) => {
     return async  (dispatch, getState) => {
         const userId = getState().auth.userId
         const response = await profileAPI.saveProfileData(profileData)
         if(response.data.resultCode === 0){
             dispatch(getProfileData(userId))
         } else {
             dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
             return Promise.reject(response.data.messages[0])
         }
     }
 }

export default profileReducer;