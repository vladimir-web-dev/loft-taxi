import { apiCall } from '../../helpers';
import { useHistory } from "react-router-dom";

import {
    authRequest,
    authSuccess,
    authFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure
} from './actions';

export const mwAuthentication = store => next => action => {
    if (action.type === authRequest.toString()) {
        const url = 'https://loft-taxi.glitch.me/auth';
        
        apiCall(url, action.payload).then(
            result => {
                result.success 
                ? store.dispatch(authSuccess(result.token))
                : store.dispatch(authFailure(result.error))
            }
        );
    }

    next(action);
};

export const mwRegistration = store => next => action => {
    if (action.type === registrationRequest.toString()) {
        const url = 'https://loft-taxi.glitch.me/register';

        apiCall(url, action.payload).then(
            result => result.success 
                ? store.dispatch(registrationSuccess(result.token))
                : store.dispatch(registrationFailure(result.error))
        );
    }

    var test = next(action);

    console.log(store.getState());

    return test;
};