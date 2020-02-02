import { createStore, applyMiddleware, compose } from 'redux';
import authReducer, { mwAuthentication, mwRegistration } from './modules/auth';
import cardReducer, { mwCard } from './modules/card';
import { combineReducers } from 'redux';


export const initStore = () => { 
    return createStore(
        combineReducers({
            authReducer, 
            cardReducer
        }),
        compose(
            applyMiddleware(mwAuthentication),
            applyMiddleware(mwRegistration),
            applyMiddleware(mwCard)
        )
    );
};
    