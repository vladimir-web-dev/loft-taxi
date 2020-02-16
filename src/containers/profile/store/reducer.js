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

const isUpdatingCard = handleActions({
    [cardUpdateRequest]: () => true,
    [cardUpdateSuccess]: () => false,
    [cardUpdateFailure]: () => false,
   
}, false);

const isFetchingCardDetails  = handleActions({
    [cardDetailsRequest]: () => true,
    [cardDetailsSuccess]: () => false,
    [cardDetailsFailure]: () => false   
}, false);


const isUpdated = handleActions({
    [cardDetailsRequest]: () => false,
    [cardUpdateSuccess]: () => true,
}, false);

const error = handleActions({
    [cardUpdateFailure]: (_state, action) => action.payload,
    [cardUpdateSuccess]: () => "",
    [cardDetailsFailure]: (_state, action) => action.payload
}, false)

export default combineReducers({isUpdatingCard, isFetchingCardDetails, isUpdated, card, error});
