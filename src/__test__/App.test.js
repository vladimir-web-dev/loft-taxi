import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<App />)

    expect(container).toMatchSnapshot(); 
})

it('first render', () => {
  const {queryByTestId} = render(<App />);

  expect(queryByTestId('login-page')).toBeTruthy();
  expect(queryByTestId('registration-page')).not.toBeTruthy();
  expect(queryByTestId('map-page')).not.toBeTruthy();
  expect(queryByTestId('profile-page')).not.toBeTruthy();
})