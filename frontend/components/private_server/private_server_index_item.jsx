import React from 'react';
import chooseColor from './../../util/choose_color';

class PrivateServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const otherUserId = this.props.server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        if(!this.props.users[otherUserId]) return null;

        return (
            <div className="user-info">
                <div className={`user-icon icon-container ${chooseColor(otherUserId)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </div>
                <i className={`fa fa-circle ${this.props.users[otherUserId].status}`}></i>
                <h1 className="username">{this.props.users[otherUserId].username}</h1>
            </div>
        )
    }
}

export default PrivateServerIndexItem;