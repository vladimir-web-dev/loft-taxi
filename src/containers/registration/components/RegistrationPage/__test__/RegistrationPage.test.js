import React from "react";
import ReactDOM from "react-dom";
import { RegistrationPage } from "../RegistrationPage";
import { render } from "@testing-library/react";
import { initStore } from "../../../store";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "mutationobserver-shim";
global.MutationObserver = window.MutationObserver;


it("renders without crashing", () => {
  const store = initStore();
  const div = document.createElement("div");
  const history = createMemoryHistory();

  ReactDOM.render(
    <Router history={history}>
      <Provider store={store}>
        <RegistrationPage />
      </Provider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
  const store = initStore();
  const div = document.createElement("div");
  const history = createMemoryHistory();

  const { container } = render(
    <Router history={history}>
      <Provider store={store}>
        <RegistrationPage />
      </Provider>
    </Router>,
    div
  );
  expect(container).toMatchSnapshot();
});
