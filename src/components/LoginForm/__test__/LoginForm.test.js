import React from 'react';
import ReactDOM from 'react-dom';
import LoginFrom from '../LoginForm';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginFrom changePage={() => {}}></LoginFrom>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders correct elemets', () => {
    const {queryByTestId} = render(<LoginFrom changePage={() => {}}></LoginFrom>);

    expect(queryByTestId('login-form')).toBeTruthy();
    expect(queryByTestId('link-register')).toBeTruthy();
    expect(queryByTestId('input-name')).toBeTruthy();
    expect(queryByTestId('input-pass')).toBeTruthy();
    expect(queryByTestId('button-login')).toBeTruthy();
})

it('matches snapshot', () => {
    const {container} = render(<LoginFrom changePage={() => {}}></LoginFrom>)
    expect(container).toMatchSnapshot(); 
})