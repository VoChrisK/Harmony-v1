import React from 'react';
import chooseColor from './../../util/choose_color';
import { updateUser } from './../../actions/user_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

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
        const user = Object.assign({}, this.props.currentUser);
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
                    <li onClick={this.setStatus.bind(this)}>Offline</li>
                </ul>

                <div onClick={this.showDropdown.bind(this)} className={`user-icon icon-container ${chooseColor(this.props.currentUserId)}`}></div>
                <i onClick={() => this.props.editUserModal()} className="fa fa-cog"></i>
                <button className="logout" onClick={(this.logout.bind(this))}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[ownProps.currentUserId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: user => dispatch(updateUser(user)),
        editUserModal: () => dispatch(openModal("editName"))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);