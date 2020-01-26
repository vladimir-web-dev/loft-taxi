import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from '../RegistrationForm';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationForm changePage={() => {}}></RegistrationForm>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders correct elemets', () => {
    const { queryByTestId } = render(<RegistrationForm changePage={() => {}}></RegistrationForm>);

    expect(queryByTestId('registration-form')).toBeTruthy();
    expect(queryByTestId('link-login')).toBeTruthy();
    expect(queryByTestId('input-fname')).toBeTruthy();
    expect(queryByTestId('input-lname')).toBeTruthy();
    expect(queryByTestId('input-email')).toBeTruthy();
    expect(queryByTestId('input-pass')).toBeTruthy();
    expect(queryByTestId('button-login')).toBeTruthy();
})

it('matches snapshot', () => {
    const {container} = render(<RegistrationForm changePage={() => {}}></RegistrationForm>)
    expect(container).toMatchSnapshot(); 
})