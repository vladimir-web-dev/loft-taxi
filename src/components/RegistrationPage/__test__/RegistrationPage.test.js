import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationPage from '../RegistrationPage';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RegistrationPage changePage={() => {}}></RegistrationPage>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<RegistrationPage changePage={() => {}}></RegistrationPage>)
    expect(container).toMatchSnapshot(); 
})