import { apiCallsHelper } from '../../helpers';
import {
    cardDetailsRequest,
    cardUpdateRequest,
    cardUpdateSuccess,
    cardUpdateFailure,
    cardDetailsSuccess,
    cardDetailsFailure
} from './actions';

export const mwCard = store => next => action => {
    if (action.type === cardUpdateRequest.toString()) {
        const url = 'https://loft-taxi.glitch.me/card';
        apiCallsHelper.post(url, action.payload).then(
            result => result.success 
                ? store.dispatch(cardUpdateSuccess(result.token))
                : store.dispatch(cardUpdateFailure(result.error))
            
        );
    }

    if (action.type === cardDetailsRequest.toString()) {
        const url = `https://loft-taxi.glitch.me/card?token=${action.payload}`;

        apiCallsHelper.get(url).then(
            result => result.success === false                 
                ? store.dispatch(cardDetailsFailure(result.error))
                : store.dispatch(cardDetailsSuccess(result))
        );
    }

    next(action);
}