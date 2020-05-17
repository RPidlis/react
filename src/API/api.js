import * as axois from "axios";
import * as axios from "axios";

const instance = axois.create({
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
    auth() {
      return instance.get(`auth/me`).then(response => response.data)
    }

};


