import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
//&& !window.localStorage.getItem("currentUserId")
// || window.localStorage.getItem("currentUserId") 

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={props =>
            !loggedIn && !Boolean(window.localStorage.getItem("currentUserId")) ? <Component {...props} /> : <Redirect to="/servers/@me" />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn || Boolean(window.localStorage.getItem("currentUserId")) ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));