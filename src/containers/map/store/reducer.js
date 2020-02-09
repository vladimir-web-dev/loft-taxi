import {
    loadAddresses,
    clearRoute,
    loadRoute
} from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const addresses = handleActions({
    [loadAddresses]: (_state, action) => action.payload
}, []);

const route = handleActions({
    [loadRoute]: (_state, action) => action.payload,
    [clearRoute]: () => []
}, []);



export default combineReducers({ addresses, route });