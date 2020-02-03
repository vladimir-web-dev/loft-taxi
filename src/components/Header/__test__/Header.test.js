import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import {render, cleanup} from '@testing-library/react';
import { Router } from 'react-router-dom';

import { initStore } from "../../../store";
import { Provider } from 'react-redux'
import { createMemoryHistory } from "history";

it("renders without crashing", () => {
    const store = initStore();
    const div = document.createElement("div");
    const history = createMemoryHistory();
  
    ReactDOM.render(
      <Router history={history}>
        <Provider store={store}>
          <Header />
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
        <Header />
      </Provider>
    </Router>
  );
  expect(container).toMatchSnapshot();
});