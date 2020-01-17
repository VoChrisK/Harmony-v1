import React from 'react';
import chooseColor from './../../util/choose_color';
import { updateUser } from './../../actions/user_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { logout } from './../../actions/session_actions';

class EditUser extends React.Component {
    constructor(props) {
        super(props);
    }

    setStatus(event) {
        const user = Object.assign({}, this.props.currentUser);
        user["status"] = event.target.innerHTML;
        this.props.updateUser(user);
    }

    showDropdown() {
        document.getElementsByClassName("status-dropdown")[0].classList.toggle("is-showing");
    }

    logout() {
        const user = {};
        user["id"] = this.props.currentUserId;
        user["status"] = "Offline"
        this.props.updateUser(user).then(
            () => this.props.logout().then(
                () => {
                    this.props.history.push("/login");
                }
            )
        );

        window.localStorage.clear();
    }

    render() {
        return (
            <div className="user-options">
                <ul className="status-dropdown dropdown-menu">
                    <li onClick={this.setStatus.bind(this)}>Online</li>
                    <li onClick={this.setStatus.bind(this)}>Away</li>
                    <li onClick={this.setStatus.bind(this)}>Do not disturb</li>
                    <li onClick={this.setStatus.bind(this)}>Offline</li>
                </ul>

                <div onClick={this.showDropdown.bind(this)} className={`user-icon icon-container ${chooseColor(this.props.currentUserId)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </div>
                <h1 className="username-header">{this.props.currentUser ? this.props.currentUser.username : ""}</h1>
                <h1 className="username-tooltip tooltip">{this.props.currentUser ? this.props.currentUser.username : ""}</h1>
                <i onClick={() => this.props.editUserModal()} className="fa fa-cog"></i>
                <button className="logout" onClick={(this.logout.bind(this))}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUserId: ownProps.currentUserId,
        currentUser: state.entities.users[ownProps.currentUserId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: user => dispatch(updateUser(user)),
        editUserModal: () => dispatch(openModal("editName")),
        logout: () => dispatch(logout())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUser));