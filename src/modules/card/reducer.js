import {
    cardDetailsRequest,
    cardUpdateRequest,
    cardUpdateSuccess,
    cardUpdateFailure,
    cardDetailsSuccess,
    cardDetailsFailure
} from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const card = handleActions({
    [cardUpdateRequest]: () => {},
    [cardUpdateSuccess]: (_state, action) => action.payload,
    [cardDetailsSuccess]: (_state, action) => action.payload,
},{});

const isUpdating = handleActions({
    [cardUpdateRequest]: () => true,
    [cardUpdateSuccess]: () => false,
    [cardUpdateFailure]: () => false,
    [cardDetailsRequest]: () => true,
    [cardDetailsSuccess]: () => false,
    [cardDetailsFailure]: () => false
}, false);

const isUpdated = handleActions({
    [cardUpdateRequest]: () => false,
    [cardUpdateSuccess]: () => true,
}, false);

const error = handleActions({
    [cardUpdateFailure]: (_state, action) => action.payload,
    [cardUpdateSuccess]: () => "",
    [cardDetailsFailure]: (_state, action) => action.payload
}, false)

export default combineReducers({isUpdating, isUpdated, card, error});
