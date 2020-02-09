import { createAction } from 'redux-actions';

export const cardDetailsRequest = createAction('taxi/card/CARD_DETAILS_REQUEST');
export const cardDetailsSuccess = createAction('taxi/card/CARD_DETAILS_SUCCESS');
export const cardDetailsFailure = createAction('taxi/card/CARD_DETAILS_FAILURE');

export const cardUpdateRequest = createAction('taxi/card/CARD_UPDATE_REQUEST');
export const cardUpdateSuccess = createAction('taxi/card/CARD_UPDATE_SUCCESS');
export const cardUpdateFailure = createAction('taxi/card/CARD_UPDATE_FAILURE');

