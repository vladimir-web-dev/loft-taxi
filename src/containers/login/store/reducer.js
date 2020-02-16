import {
    authRequest,
    authSuccess,
    authFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    logout
} from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const token = handleActions({
    [authRequest]: () => "",
    [authSuccess]: (_state, action) => action.payload,
    [registrationRequest]: () => "",
    [registrationSuccess]: (_state, action) => action.payload,
    [logout]: () => ""
}, "");

const isAuthenticating = handleActions({
    [authRequest]: () => true,
    [authSuccess]: () => false,
    [authFailure]: () => false,
    [registrationRequest]: () => true,
    [registrationSuccess]: () => false,
    [registrationFailure]: () => false
}, false);

const isAuthenticated = handleActions({   
    [authSuccess]: () => true,
    [authFailure]: () => false,  
    [registrationSuccess]: () => true,
    [registrationFailure]: () => false,
    [logout]: () => false
}, false);

const authError = handleActions({   
    [authSuccess]: () => "",
    [authFailure]: (_state, action) => action.payload,  
}, "");

const registrationError = handleActions({    
    [registrationSuccess]: () => "",
    [registrationFailure]: (_state, action) => action.payload
}, "");

export default combineReducers({isAuthenticating, isAuthenticated, token, authError, registrationError});
