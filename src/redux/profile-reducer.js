const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEX";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState;
initialState = {
    posts: [
        {id: "1", massage: "hi,how are  you", likesCount: 12},
        {id: "2", massage: "it's my first post", likesCount: 11},
    ],
    newPostText: `it-kamasutra`,
    profile: null
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
        }case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    };

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;