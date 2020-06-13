import {profileApi, userApi} from "../API/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEX";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState;
initialState = {
    posts: [
        {id: "1", massage: "hi,how are  you", likesCount: 12},
        {id: "2", massage: "it's my first post", likesCount: 11},
    ],
    newPostText: `it-kamasutra`,
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, massage: state.newPostText, likesCount: 0}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
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

export const addPostActionCreator = () => ({type: ADD_POST});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export const getUserProfile = (userId) => (dispatch) => {
    userApi.getProfile(userId).then((response) => {
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
            debugger;
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
}



export default profileReducer;