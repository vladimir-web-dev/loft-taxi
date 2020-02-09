import { createAction } from 'redux-actions';

export const authRequest = createAction('taxi/auth/AUTH_REQUEST');
export const authSuccess = createAction('taxi/auth/AUTH_SUCCESS');
export const authFailure = createAction('taxi/auth/AUTH_FAILURE');

export const registrationRequest = createAction('taxi/auth/REGISTRATION_REQUEST');
export const registrationSuccess = createAction('taxi/auth/REGISTRATION_SUCCESS');
export const registrationFailure = createAction('taxi/auth/REGISTRATION_FAILURE');

export const logout = createAction('taxi/auth/LOGOUT');

