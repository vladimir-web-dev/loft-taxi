import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from '../ProfilePage';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfilePage changePage={() => {}}></ProfilePage>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<ProfilePage changePage={() => {}}></ProfilePage>)
    expect(container).toMatchSnapshot(); 
})