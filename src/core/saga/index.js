import { all, fork } from "redux-saga/effects";
import { authSaga } from "../../containers/login/store";
import { routeSaga } from "../../containers/map/store";
import { profileSaga } from "../../containers/profile/store";

export function* rootSaga() {
  yield all([
    yield fork(authSaga),
    yield fork(profileSaga),
    yield fork(routeSaga)
  ]);
}
