import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlrware from 'redux-thunk';

let reducers = combineReducers({
     profilePage: profileReducer,
     massagesPage: dialogsReducer,
     usersPage: usersReducer,
     auth: authReducer


})

let store = createStore(reducers, applyMiddleware(thunkMiddlrware));

window.store = store;

export default store