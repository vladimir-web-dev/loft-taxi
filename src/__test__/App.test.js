import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup, fireEvent} from '@testing-library/react';
import App from '../App';
import { Router } from 'react-router-dom';

import { initStore } from "../store";
import { Provider } from 'react-redux'
import { createMemoryHistory } from "history";

// afterEach(cleanup);

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

it('renders without crashing, navigation works', () => {
  const history = createMemoryHistory();
  const store = initStore()
  const { container, getByText } = render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );

  //Renders LoginPage => LoginForm components
  expect(container).toHaveTextContent("Войти");
  expect(container).toHaveTextContent("Зарегистрируйтесь");

  fireEvent.click(getByText('Зарегистрируйтесь'));

  //Renders RegistrationPage => RegistrationForm components
  expect(container).toHaveTextContent("Регистрация");

});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })

// it('matches snapshot', () => {
//     const {container} = render(<App />)

//     expect(container).toMatchSnapshot(); 
// })

// it('first render', () => {
//   const {queryByTestId} = render(<App />);

//   expect(queryByTestId('login-page')).toBeTruthy();
//   expect(queryByTestId('registration-page')).not.toBeTruthy();
//   expect(queryByTestId('map-page')).not.toBeTruthy();
//   expect(queryByTestId('profile-page')).not.toBeTruthy();
// })