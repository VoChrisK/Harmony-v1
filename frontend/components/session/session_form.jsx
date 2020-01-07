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

                <form className="session-form">
                    <label htmlFor="email" className="form-label">
                        Email
                        <input type="text" name="email" id="email" className="form-input" />
                    </label>

                    { this.renderUsernameInput() }

                    <label htmlFor="password" className="form-label">
                        Password
                        <input type="password" name="password" id="password" className="form-input"/>
                    </label>

                    {this.loginForm() ? <a href="#">Forgot your password?</a> : null }

                    <input type="submit" value={this.loginForm() ? "Login" : "Continue"}/>

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
                <label htmlFor="username" className="form-label">
                    Username
                    <input type="text" name="username" id="username" className="form-input" />
                </label>
            );
        }
    }

    renderDemoLogin() {
        if(this.loginForm()) {
            <button id="demo-login">Demo Login</button>
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