export const getTokenSelector = state => state.token;
export const getIsAuthenticatedSelector = state =>  state.isAuthenticated;
export const getIsAuthenticatingSelector = state => state.isAuthenticating;
export const getAuthErrorSelector = state => state.authError;
export const getRegistrationErrorSelector = state => state.registrationError;