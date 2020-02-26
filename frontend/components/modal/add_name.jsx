import React from 'react';
import { findUser } from './../../util/user_api_util';

class AddName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.formType === "editName" ? this.props.currentUser.username : ""
        };
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("edit-name-modal");
    }

    handleName(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user;

        if(this.props.formType === "editName") {
            user = Object.assign({}, this.props.currentUser);
            user["username"] = this.state.name;
            this.props.updateUser(user).then(
                () => {
                    this.props.clearErrors();
                    this.props.closeModal();
                }
            );
        } else {
            findUser(this.state.name).then(
                user => {
                    this.props.createFriend(this.props.currentUser, user).then(
                        () => {
                            this.props.clearErrors();
                            this.props.closeModal();
                        }
                )
                },
                errors => this.props.receiveErrors(errors.responseJSON)
            );
        }
    }

    renderError() {
        if (this.props.errors.length === 0) {
            return null;
        } else {
            return <i className="general-error">{" - " + this.props.errors[0]}</i>;
        }
    }

    render() {
        return (
            <form className="edit-name" onSubmit={this.handleSubmit.bind(this)}>
                <div className="edit-name-div">
                    <label className={`name-label form-label ${Boolean(this.renderError()) ? " red-label" : ""}`} htmlFor="edit-name-input">{this.props.formType === "editName" ? "EDIT NAME" : "ADD FRIEND"}
                        {this.renderError()}
                    </label>
                    <input type="text" id="edit-name-input" className={`form-input ${Boolean(this.renderError()) ? " red-highlight" : ""}`} autoComplete="off" value={this.state.name} onChange={this.handleName.bind(this)} />
                </div>
                <input type="submit" value={this.props.formType === "editName" ? "Update" : "Add Friend"} className="name-submit form-submit"/>
            </form>
        );
    }
}

export default AddName;