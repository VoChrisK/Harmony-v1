import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return(
        <div className="harmony-app">
            <div id="background"></div>
            <Route to="/login" component={LoginFormContainer} />
        </div>
    );
};

export default App;

// <Route to="/signup" component={SignupFormContainer} />