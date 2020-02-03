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
        const { history, data } = action.payload;

        apiCall(url, data).then(
            result => {
                if(result.success) {
                    store.dispatch(authSuccess(result.token));
                    history.push('/map');
                } else {
                    store.dispatch(authFailure(result.error))
                }
            }
        );
    }

    next(action);
};

export const mwRegistration = store => next => action => {
    if (action.type === registrationRequest.toString()) {
        const url = 'https://loft-taxi.glitch.me/register';
        const { history, data } = action.payload;

        apiCall(url, data).then(
            result => {
                if(result.success) {
                    store.dispatch(registrationSuccess(result.token));
                    history.push('/map');
                } else {
                    store.dispatch(registrationFailure(result.error))
                }
            }
        );
    }

    next(action);;
};