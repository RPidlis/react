import {authApi} from "../API/api";
import {stopSubmit} from 'redux-form'
import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED = "SET_INITIALIZED";


let initialState;
initialState = {
    initialaized: false
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialaized: true
            }
        }


        default:
            return state;
    };

}

export const initializedSuccess = () => ({type: SET_INITIALIZED});
export const initialize = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() =>{
            dispatch(initializedSuccess());
        })
}

export default appReducer;
