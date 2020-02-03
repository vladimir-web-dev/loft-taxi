import React from 'react';
import ReactDOM from 'react-dom';
import LoginFrom from '../LoginForm';
import {render, cleanup} from '@testing-library/react';
import { initStore } from "../../../store";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
it("renders without crashing", () => {
    const store = initStore();
    const div = document.createElement("div");
    const history = createMemoryHistory();
  
    ReactDOM.render(
      <Router history={history}>
        <Provider store={store}>
          <LoginFrom />
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
          <LoginFrom />
        </Provider>
      </Router>,
      div
    );
    expect(container).toMatchSnapshot();
  });