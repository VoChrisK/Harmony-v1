import React from 'react';
import { Link } from 'react-router-dom';
import uniqueId from './../../util/uniqueId';
import { createAffiliation } from './../../util/affiliation_api_util';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        };
        this.totalTimer = 0;

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        document.getElementById("background").style.background = `url(${discordBackground}) bottom`;
        document.getElementById("background").style.backgroundSize = "cover"
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        if(!this.loginForm()) {
            user["status"] = "Online";
            setTimeout(() => this.props.processForm(user).then(
                newUser => {
                    window.localStorage.setItem("currentUserId", newUser.currentUser.id)
                    createAffiliation(newUser.currentUser.id, 1).then(
                        this.props.requestServer(1)
                    )
                }), this.totalTimer);
        }
        else {
            setTimeout(() => {
                this.props.processForm(user).then(
                    newUser => {
                        newUser.currentUser.status = "Online";
                        this.props.updateUser(newUser.currentUser);    
                        window.localStorage.setItem("currentUserId", newUser.currentUser.id);
                    }
                )
            }
            , this.totalTimer);
        }
    }

    handleInput(input) {
        return e => {
            this.setState({ [input]: e.target.value });
        };
    }

    demoUser() {
        const demoUser = { email: "IAmTheBestDemoUser@demo.com", password: "DemoPassword" };
        this.state = demoUser;
        const intervalLength = 75;
        const timer = demoUser.email.length * intervalLength;
        this.totalTimer = timer + (demoUser.password.length * intervalLength) + 1000;
        
        this.typeInputInfo("email", demoUser.email, intervalLength);
        setTimeout(() => this.typeInputInfo("password", demoUser.password, intervalLength), timer);
    }

    typeInputInfo(field, value, intervalLength) {
        let incrementedValue = "";

        setInterval(() => {
            if(value.length > 0) {
                incrementedValue += value.slice(0, 1);
                value = value.slice(1);
                this.setState({[field]: incrementedValue });
            } else {
                clearInterval();
            }
        }, intervalLength);
    }

    renderSignupErrors(input, check) {
        if(check && this.loginForm()) return null;
        if(this.props.errors.length === 0) return null;

        for(let i = 0; i < this.props.errors.length; i++) {
            if (this.props.errors[i].includes(input)) return <h1 className="signup-error">{this.props.errors[i]}</h1>;
        }

        return null;
    }

    renderLoginError() {
        if(this.loginForm() && this.props.errors.length > 0) {
            return (
                <h1 className="login-error">{this.props.errors}</h1>
            )
        } else {
            return null;
        }
    }

    render() {
        return(
            <div id="background">
                <div id="session-form-container">
                    { this.renderHeader() }

                    <form id="session-form" onSubmit={this.handleSubmit.bind(this)}>
                        <div id="email-input" className="input-field">
                            <label htmlFor="email" className="form-label">Email</label>
                            {this.renderSignupErrors("Email", true)}
                            <input type="email" name="email" id="email" value={this.state.email} className={`form-input ${Boolean(this.renderSignupErrors("Email", false)) ? "red-highlight" : ""}`} autoComplete="off" onChange={this.handleInput("email")} />
                        </div>

                        { this.renderUsernameInput() }

                        <div id="password-input" className="input-field">
                            <label htmlFor="password" className="form-label">Password</label>
                            {this.renderSignupErrors("Password", true)}
                            <input type="password" name="password" id="password" value={this.state.password} className={`form-input ${Boolean(this.renderSignupErrors("Email", false)) ? "red-highlight" : ""}`} onChange={this.handleInput("password")}/>
                        </div>

                        { this.renderLoginError() }
                        {this.loginForm() ? <button onClick={this.demoUser.bind(this)} id="forgot-password-link">Forgot your password? Try the demo login instead!</button> : null }

                        <input type="submit" className="form-submit" value={this.loginForm() ? "Login" : "Continue"}/>

                        { this.renderDemoLogin() }
                    </form>

                    { this.switchLinks() }
                </div>
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
                <div id="username-input-2" className="input-field">
                    <label htmlFor="username" className="form-label">Username</label>
                    {this.renderSignupErrors("Username", true)}
                    <input type="text" name="username" id="username" autoComplete="off" value={this.state.username} className={`form-input ${Boolean(this.renderSignupErrors("Email", false)) ? "red-highlight" : ""}`} onChange={this.handleInput("username")}/>
                </div>
                
            );
        }
    }

    renderDemoLogin() {
        if(this.loginForm()) {
            return <button id="demo-login" onClick={this.demoUser.bind(this)}>Demo Login</button>
        } else {
            return null;
        }
    }

    //this method changes the link to either /signup or /login, whichever one is not the current address
    switchLinks() {
        const { clearSessionErrors } = this.props;

        if(this.loginForm()) {
            return <h3>Need an account? <Link onClick={() => clearSessionErrors()} to="/signup">Register</Link></h3>
        } else {
            return <Link onClick={() => clearSessionErrors()} to="/login">Already have an account?</Link>
        }
    }
}

export default SessionForm;