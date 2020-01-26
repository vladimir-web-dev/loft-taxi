import React from 'react';
import ReactDOM from 'react-dom';
import MapPage from '../MapPage';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MapPage changePage={() => {}}></MapPage>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<MapPage changePage={() => {}}></MapPage>)
    expect(container).toMatchSnapshot(); 
})