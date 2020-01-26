import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App changePage={() => {}}></App>, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const {container} = render(<App changePage={() => {}}></App>)
    expect(container).toMatchSnapshot(); 
})