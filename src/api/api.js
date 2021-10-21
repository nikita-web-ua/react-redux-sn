import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4e136dca-4dec-4506-a5ef-61efe2ea4b48',
    }
})


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then((response) => {
                return response.data
            })
    },
    getProfileData: (userId) => {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfileData(userId)
    }
}

export const profileAPI = {
    getProfileData: (userId) => {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus: (newStatus) => {
        return instance.put(`profile/status `, {status: newStatus})
    },
    savePhoto: (photoFile) => {
        let formData = new FormData()
        formData.append('photo', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
    },
    login: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete(`/auth/login`)
    }
}
