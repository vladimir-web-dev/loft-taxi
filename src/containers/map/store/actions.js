import { createAction } from 'redux-actions';

export const getAddresses = createAction('taxi/route/GET_ADDRESSES_LIST');
export const loadAddresses = createAction('taxi/route/LOAD_ADDRESSES_LIST');
export const getRoute  = createAction('taxi/route/GET_ROUTE');
export const loadRoute  = createAction('taxi/route/LOAD_ROUTE');
export const clearRoute = createAction('taxi/route/CLEAR_ROUTE');
 