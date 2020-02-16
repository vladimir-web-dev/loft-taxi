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
import { take, call, put, all, fork } from "redux-saga/effects";

const URL_LOGIN = "https://loft-taxi.glitch.me/auth";
const URL_REGISTER = "https://loft-taxi.glitch.me/register";

function saveToken(token) {
  localStorage.setItem('token',token);
}

function clearToken() {
  localStorage.clear();
}

function* fetchLoginData({ data }) {
  return yield call(apiCallsHelper.post, URL_LOGIN, data);
}

function* fetchRegistrationData({ data }) {
  return yield call(apiCallsHelper.post, URL_REGISTER, data);
}

function* watchRegistrationRequest() {
  while (true) {
    const { payload } = yield take(registrationRequest.toString());
    const result = yield call(fetchRegistrationData, payload);

    if (result.success) {
      saveToken(result.token);
      yield put(registrationSuccess(result.token));
      payload.history.push("/map");
    } else {
      yield put(registrationFailure(result.error));
    }
  }
}

function* watchLoginLogoutRequest() {
  while (true) {
    const { payload } = yield take(authRequest.toString());
    const result = yield call(fetchLoginData, payload);

    if (result.success) {
      saveToken(result.token);
      yield put(authSuccess(result.token));
      payload.history.push("/map");
    } else {
      yield put(authFailure(result.error));
    }
  }
}

function* watchLogoutRequest() {
  while (true) {
    yield take(logout.toString());
    clearToken();
  }

}

export function* authSaga() {
  yield all([
    yield fork(watchRegistrationRequest),
    yield fork(watchLoginLogoutRequest),
    yield fork(watchLogoutRequest)
  ]);
}
