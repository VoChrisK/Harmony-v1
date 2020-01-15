import React from 'react';
import chooseColor from './../../util/choose_color';
import { updateUser } from './../../actions/user_actions';
import { connect } from 'react-redux';

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
        this.props.logout();
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
        updateUser: user => dispatch(updateUser(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);