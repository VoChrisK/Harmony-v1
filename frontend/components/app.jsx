import React from 'react';
import Splash from './splash';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from './../util/route.util';
import HomeContainer from './home/home_container';

const App = () => {
    return(
        <div className="harmony-app">
            <Switch>
                <Route path="/servers/@me" component={HomeContainer} />
                <Route path="/servers/:serverId" component={HomeContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route component={Splash} />
            </Switch>
        </div>
    );
};

export default App;