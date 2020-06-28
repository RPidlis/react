import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e5c15675-5069-44ea-82d0-611b1589ba27'
    }
});

export  const userApi = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userId) {
        console.log('Obsolete method. Please profileApi object')
        return profileApi.getProfile(userId);
    }

};

export const authApi = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}

export  const profileApi = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status){
        return instance.put(`profile/status/`,{ status: status })

    }

};