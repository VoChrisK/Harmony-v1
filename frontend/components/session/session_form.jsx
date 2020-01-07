import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="session-form-container">
                { this.renderHeader() }

                <form id="session-form">
                    <div id="email-input" className="input-field">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" name="email" id="email" className="form-input" />
                    </div>

                    { this.renderUsernameInput() }

                    <div id="password-input" className="input-field">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-input"/>
                    </div>

                    {this.loginForm() ? <a id="forgot-password-link" href="#">Forgot your password?</a> : null }

                    <input type="submit" className="form-submit" value={this.loginForm() ? "Login" : "Continue"}/>

                    { this.renderDemoLogin() }
                </form>

                { this.switchLinks() }
            </div>
        );
    }

    //helper methods

    loginForm() {
        if (this.props.formType === "login") {
            return true;
        } else {
            return false;
        }
    }

    renderHeader() {
        if(this.loginForm()) {
            return (
                <div className="signup-headers">
                    <h1 className="form-header">Welcome back!</h1>
                    <h2 className="sub-form-header">We're so excited to see you again!</h2>
                </div>
            )
        } else {
            return <h1 className="form-header">Create an account</h1>
        }
    }

    renderUsernameInput() {
        if(this.loginForm()) {
            return null;
        } else {
            return (
                <div id="username-input" className="input-field">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" className="form-input" />
                </div>
                
            );
        }
    }

    renderDemoLogin() {
        if(this.loginForm()) {
            return <button id="demo-login">Demo Login</button>
        } else {
            return null;
        }
    }

    //this method changes the link to either /signup or /login, whichever one is not the current address
    switchLinks() {
        if(this.loginForm()) {
            return <h3>Need an account? <Link to="/signup">Register</Link></h3>
        } else {
            return <Link to="/login">Already have an account?</Link>
        }
    }
}

export default SessionForm;