import React from 'react';
import ReactDOM from 'react-dom';
import Map from '../Map';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Map />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<Map />)
    expect(container).toMatchSnapshot(); 
})