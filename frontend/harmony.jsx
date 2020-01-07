import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/sessions_api_util';
// import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    ReactDOM.render(<h1>hi</h1>, root);
});