import React from 'react';
import ReactDOM from 'react-dom';
import {ProfileForm} from '../ProfileForm';
import {render} from '@testing-library/react';
import { Provider } from 'react-redux'
import { initStore } from "../../../store";
import 'mutationobserver-shim';
global.MutationObserver = window.MutationObserver;


it('renders without crashing', () => {
    const store = initStore();
    const div = document.createElement('div');

    ReactDOM.render(
        <Provider store={store}>
            <ProfileForm />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('matches snapshot', () => {
    const store = initStore();
    const div = document.createElement('div');

    const {container} = render(
    <Provider store={store}>
        <ProfileForm />
    </Provider>, div);
    expect(container).toMatchSnapshot(); 
})