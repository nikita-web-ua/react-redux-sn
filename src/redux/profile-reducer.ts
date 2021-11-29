import {stopSubmit} from "redux-form";
 import {PhotosType, PostType, ProfileDataType} from "../types/types";
 import {profileAPI} from "../api/profileAPI";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: "Hello World!", likesCounter: 321},
        {id: 2, message: "0101101110", likesCounter: 18},
    ] as Array<PostType>,
    profileData: null as null | ProfileDataType,
    profileStatus: '',
}

export const actions = {
    addPost: (postText: string) => ({type: 'profile/ADD-POST', text: postText} as const),
    setProfileData: (profileData: ProfileDataType) => ({type: 'profile/SET_PROFILE_DATA', profileData} as const),
    setProfileStatus: (status: string) => ({type: 'profile/SET_PROFILE_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const)
}

const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
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
        case 'profile/SET_PROFILE_DATA': {
            return {
                ...state,
                profileData: action.profileData
            }
        }
        case 'profile/SET_PROFILE_STATUS': {
            return{
                ...state,
                profileStatus: action.status
            }
        }
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return{
                ...state,
                profileData: {...state.profileData, photos: action.photos} as ProfileDataType
            }
        }
        default:
            return state
    }


}

export const getProfileData = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileData(userId)
                dispatch(actions.setProfileData(data))
    }
}

export const getProfileStatus = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileStatus(userId)
                dispatch(actions.setProfileStatus(data))
    }
}

 export const updateProfileStatus = (status: string):ThunkType => async (dispatch) => {
     try {
         let data = await profileAPI.updateProfileStatus(status)
         if (data.resultCode === 0) {
             dispatch(actions.setProfileStatus(status))
         }
     } catch (error) {
        alert('some error accured')
         console.error(error)
     }
 }

 export const uploadPhoto = (file: File): ThunkType => {
     return async  (dispatch) => {
         let data = await profileAPI.savePhoto(file)
         if(data.resultCode === 0){
             dispatch(actions.savePhotoSuccess(data.data.photos))
         }
     }
 }

 export const saveProfile = (profileData: ProfileDataType): ThunkType => {
     return async  (dispatch, getState) => {
         const userId = getState().auth.userId
         const data = await profileAPI.saveProfileData(profileData)
         if(data.resultCode === 0){
             if (userId != null) {
                 dispatch(getProfileData(userId))
             } else {
                 throw new Error("userId can not be null")
             }
         } else {
             dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
             return Promise.reject(data.messages[0])
         }
     }
 }

export default profileReducer;

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>