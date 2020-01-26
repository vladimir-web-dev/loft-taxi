import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '../LoginPage';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginPage changePage={() => {}}></LoginPage>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<LoginPage changePage={() => {}}></LoginPage>)
    expect(container).toMatchSnapshot(); 
})