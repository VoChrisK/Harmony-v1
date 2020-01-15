import React from 'react';
import chooseColor from './../../util/choose_color';

class EditUser extends React.Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.logout();
        window.localStorage.clear();
    }

    render() {
        return (
            <div className="user-options">
                <div className={`user-icon icon-container ${chooseColor(this.props.currentUserId)}`}></div>
                <button className="logout" onClick={(this.logout.bind(this))}>Logout</button>
            </div>
        );
    }
}

export default EditUser;