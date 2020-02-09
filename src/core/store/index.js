import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducer";
import { rootSaga } from "../saga";
import createSagaMiddleware from "redux-saga";

export function initStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware)
    ));

  sagaMiddleware.run(rootSaga);

  return store;
}
