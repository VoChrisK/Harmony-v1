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
            () => this.props.logout()
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
                    <li onClick={this.setStatus.bind(this)}>Invisible</li>
                </ul>

                <div className="user-info-container">
                    <div onClick={this.showDropdown.bind(this)} className={`profile user-icon icon-container ${chooseColor(this.props.currentUserId)}`}>
                        <img className="discord-icon" src={discordIcon} alt="" />
                    </div>
                    <h1 className="username-header">{this.props.currentUser ? this.props.currentUser.username : ""}</h1>
                    <h1 className="username-tooltip tooltip">{this.props.currentUser ? this.props.currentUser.username : ""}</h1>
                </div>

                <div>
                    <i onClick={() => this.props.editUserModal()} className="fa fa-cog"></i>
                    <i className="fas fa-sign-out-alt" onClick={this.logout.bind(this)}></i>
                    <h1 className="logout-tooltip tooltip">Logout</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id]
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