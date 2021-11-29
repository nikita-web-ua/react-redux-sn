import {PhotosType, ProfileDataType} from "../types/types"
import {instance, APIResponseType} from "./api"

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfileData: (userId: number) => {
        return instance.get<ProfileDataType>(`profile/${userId}`).then(res => res.data)
    },
    getProfileStatus: (userId: number) => {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus: (newStatus: string) => {
        return instance.put<APIResponseType>(`profile/status `, {status: newStatus}).then(res => res.data)
    },
    savePhoto: (photoFile: File) => {
        let formData = new FormData()
        formData.append('photo', photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfileData: (profileData: ProfileDataType) => {
        return instance.put<APIResponseType>(`profile`, profileData).then(res => res.data)
    }
}