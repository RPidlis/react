import {userApi} from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWNIG_PROGRESS = "TOGGLE_IS_FOLLOWNIG_PROGRESS";

let initialState;
initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map((u)=>{
                    if(u.id === action.userId){
                        return{...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...action.users],}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWNIG_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    };

}

export const followSucses = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSucses = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount });
export const toggleIsFetchingt = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFolowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWNIG_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingt(true));
        userApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetchingt(false));

        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFolowingProgress(true,userId));
        userApi.unfollow(userId).then(data =>{
            if (data.resultCode === 0){
                dispatch(unfollowSucses(userId));
            }
            dispatch(toggleFolowingProgress(false,userId))
        })
    }
};
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFolowingProgress(true, userId))
        userApi.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSucses(userId))
            }
            dispatch(toggleFolowingProgress(false, userId))

        })
    }
}

export default usersReducer;