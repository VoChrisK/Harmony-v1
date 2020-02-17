import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestServers } from './actions/server_actions';

//add the localStorage stuff here and populate preloadedstate and pass it to the store.
//might want to store session token too and have an expiration date

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};

    if(localStorage.getItem("currentUserId")) {
        preloadedState = {
            session: {
                id: localStorage.currentUserId
            }
        }
    }

    const store = configureStore(preloadedState);
    const root = document.getElementById("root");
    window.store = store;
    window.requestServers = requestServers;
    ReactDOM.render(<Root store={store} />, root);
});