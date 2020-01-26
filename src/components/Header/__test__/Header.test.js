import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import {render, cleanup} from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header changePage={() => {}}></Header>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<Header changePage={() => {}}></Header>)
    expect(container).toMatchSnapshot(); 
})