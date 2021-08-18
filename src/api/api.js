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
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
    }
}