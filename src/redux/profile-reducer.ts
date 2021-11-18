 import {profileAPI, usersAPI} from "../api/api";
 import {stopSubmit} from "redux-form";
 import {photosType, postType, profileDataType} from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ] as Array<postType>,
    profileData: null as null | profileDataType,
    profileStatus: '',
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
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
                profileData: {...state.profileData, photos: action.photos} as profileDataType
            }
        }
        default:
            return state
    }


}

type addPostActionCreatorType = {
    type: typeof ADD_POST,
    text: string
}
export const addPost = (postText: string): addPostActionCreatorType => ({type: ADD_POST, text: postText})

type setProfileDataActionCreatorType = {
    type: typeof SET_PROFILE_DATA,
    profileData: profileDataType
 }
export const setProfileData = (profileData: profileDataType): setProfileDataActionCreatorType => ({type: SET_PROFILE_DATA, profileData})

type setProfileStatusActionCreatorType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
}
const setProfileStatus = (status: string):setProfileStatusActionCreatorType => ({type: SET_PROFILE_STATUS, status})

type savePhotoSuccessActionCreatorType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: photosType
}
const savePhotoSuccess = (photos: photosType): savePhotoSuccessActionCreatorType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfileData = (userId: number) => {
    return async (dispatch: any) => {
        let response = await usersAPI.getProfileData(userId)
                dispatch(setProfileData(response.data))
    }
}

export const getProfileStatus = (userId: number) => {
    return async (dispatch: any) => {
        let response = await profileAPI.getProfileStatus(userId)
                dispatch(setProfileStatus(response.data))
    }
}

 export const updateProfileStatus = (status: string) => async (dispatch: any) => {
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

 export const uploadPhoto = (file: any) => {
     return async  (dispatch: any) => {
         let response = await profileAPI.savePhoto(file)
         if(response.data.resultCode === 0){
             dispatch(savePhotoSuccess(response.data.data.photos))
         }
     }
 }

 export const saveProfile = (profileData: profileDataType) => {
     return async  (dispatch: any, getState: any) => {
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