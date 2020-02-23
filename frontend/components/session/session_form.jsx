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
                    createAffiliation(newUser.currentUser.id, 1)
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
        const demoUser = { email: "TestUser@test.com", password: "TestPassword" };
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

    render() {

        return(
            <div id="background">
                <div id="session-form-container">
                    { this.renderHeader() }

                    <form id="session-form" onSubmit={this.handleSubmit.bind(this)}>
                        <div id="email-input" className="input-field">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" name="email" id="email" value={this.state.email} className="form-input" autoComplete="off" onChange={this.handleInput("email")} />
                        </div>

                        { this.renderUsernameInput() }

                        <div id="password-input" className="input-field">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" id="password" value={this.state.password} className="form-input" onChange={this.handleInput("password")}/>
                        </div>

                        {this.loginForm() ? <a id="forgot-password-link" href="#">Forgot your password?</a> : null }

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
                <div id="username-input" className="input-field">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" id="username" autoComplete="off" value={this.state.username} className="form-input" onChange={this.handleInput("username")}/>
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
        if(this.loginForm()) {
            return <h3>Need an account? <Link to="/signup">Register</Link></h3>
        } else {
            return <Link onClick={this.addTransition.bind(this)} to="/login">Already have an account?</Link>
        }
    }

    addTransition() {
        document.getElementById("session-form-container").classList.add("fade-in-animation");
    }
}

export default SessionForm;