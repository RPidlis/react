import {profileApi} from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState;
initialState = {
    posts: [
        {id: "1", massage: "hi,how are  you", likesCount: 12},
        {id: "2", massage: "it's my first post", likesCount: 11},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, massage: action.newPostText, likesCount: 0}],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return  {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    };

}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    profileApi.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
}



export default profileReducer;