import {
  authRequest,
  authSuccess,
  authFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  logout
} from "./actions";
import { apiCallsHelper } from "../../../helpers";
import { take, call, put, takeLatest, all, fork } from "redux-saga/effects";

const URL_LOGIN = "https://loft-taxi.glitch.me/auth";
const URL_REGISTER = "https://loft-taxi.glitch.me/register";

function* fetchLoginData({ data }) {
  return yield call(apiCallsHelper.post, URL_LOGIN, data);
}

function* fetchRegistrationData({ data }) {
  yield call(apiCallsHelper.post, URL_REGISTER, data);
}

function* watchRegistrationRequest() {
  const { success, token } = yield takeLatest(
    registrationRequest.toString(),
    fetchRegistrationData
  );
  if (success) {
    put(registrationSuccess(token));
  } else {
    put(registrationFailure(token));
  }
}

function* watchLoginLogoutRequest() {
  while (true) {
    const { payload } = yield take(authRequest.toString());
    const { success, token } = yield call(fetchLoginData, payload);

    if (success) {
      yield put(authSuccess(token));
      payload.history.push("/map");
      yield take(logout.toString());
    } else {
      yield put(authFailure(token));
    }
  }
}

export function* authSaga() {
  yield all([
    yield fork(watchRegistrationRequest),
    yield fork(watchLoginLogoutRequest)
  ]);
}
