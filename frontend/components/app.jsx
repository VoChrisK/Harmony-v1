import React from 'react';
import Splash from './splash';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return(
        <div className="harmony-app">
            <Switch>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
                <Route component={Splash} />
            </Switch>
        </div>
    );
};

export default App;