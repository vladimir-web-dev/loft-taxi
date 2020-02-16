import {
  cardDetailsRequest,
  cardUpdateRequest,
  cardUpdateSuccess,
  cardUpdateFailure,
  cardDetailsSuccess,
  cardDetailsFailure
} from "./actions";
import { take, call, put, all, fork } from "redux-saga/effects";
import { apiCallsHelper } from "../../../helpers";

const URL_UPDATE_CARD = "https://loft-taxi.glitch.me/card";
const URL_GET_CARD = "https://loft-taxi.glitch.me/card?token=";

function* updateCardDefails({ payload }) {
  return yield call(apiCallsHelper.post, URL_UPDATE_CARD, payload);
}

function* fetchCardDetails({ payload }) {
  const url = URL_GET_CARD + payload;

  return yield call(apiCallsHelper.get, url);
}

function* watchCardUpdateRequest() {
  while (true) {
    const action = yield take(cardUpdateRequest.toString());
    const result = yield call(updateCardDefails, action);

    if (result.success) yield put(cardUpdateSuccess(result.token));
    else yield put(cardUpdateFailure(result.error));
  }
}

function* watchCardDetailsRequest() {
  while (true) {
    const action = yield take(cardDetailsRequest.toString());
    const result = yield call(fetchCardDetails, action);
    if (result.id) yield put(cardDetailsSuccess(result));
    else yield put(cardDetailsFailure(result.error));
  }
}

export function* profileSaga() {
  yield all([
    yield fork(watchCardUpdateRequest),
    yield fork(watchCardDetailsRequest)
  ]);
}
