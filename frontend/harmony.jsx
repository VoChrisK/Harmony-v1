import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestServers } from './actions/server_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById("root");
    window.store = store;
    window.requestServers = requestServers;
    ReactDOM.render(<Root store={store} />, root);
});