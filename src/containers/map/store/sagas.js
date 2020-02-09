import {
    getAddresses,
    loadAddresses,
    getRoute,
    loadRoute
} from './actions';
import { apiCallsHelper } from '../../../helpers';
import { take, call, put, all, fork } from 'redux-saga/effects';

const URL_ADDRESSES = 'https://loft-taxi.glitch.me/addressList';
const URL_ROUTE = 'https://loft-taxi.glitch.me/route';

//Fetch Sagas
function* fetchAddressesList() {
    return yield call(apiCallsHelper.get, URL_ADDRESSES);
}

function* fetchRoute({addressFrom, addressTo}) {
    const url = `${URL_ROUTE}?address1=${addressFrom}&address2=${addressTo}`
    return yield call(apiCallsHelper.get, url);
}

//Watch Sagas
function* watchAddressesRequest () {
    while (true) {
        yield take(getAddresses.toString());

        const { addresses } = yield call(fetchAddressesList);
        if(addresses.length > 0){
            yield put(loadAddresses(addresses));
        }
    }   
}

function* watchRouteRequest(){
    while (true) {
        const { payload } = yield take(getRoute.toString());

        const result = yield call(fetchRoute, payload);
        if(result.length > 0){
            yield put(loadRoute(result));
        }
    }   
}


export function* routeSaga() {
    yield all([
        yield fork(watchAddressesRequest),
        yield fork(watchRouteRequest)
    ]);
}