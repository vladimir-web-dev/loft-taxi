import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from '../ProfilePage';
import {render} from '@testing-library/react';
import { Provider } from "react-redux";
import { initStore } from "../../../store";
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
          <ProfilePage />
        </Provider>
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

it("matches snapshot", () => {
  const store = initStore();
  const history = createMemoryHistory();

  const { container } = render(
    <Router history={history}>
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    </Router>
  );
  expect(container).toMatchSnapshot();
});