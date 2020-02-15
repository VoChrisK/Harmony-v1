import React from 'react';
import chooseColor from './../../util/choose_color';
import { Link } from 'react-router-dom';

class PrivateServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const otherUserId = this.props.server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        if(!this.props.users[otherUserId]) return null;

        return (
            <Link to={`/servers/@me/${this.props.server.id}`} className="user-info">
                <div className={`user-icon icon-container ${chooseColor(otherUserId)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </div>
                <i className={`fa fa-circle ${this.props.users[otherUserId].status}`}></i>
                <h1 className="username">{this.props.users[otherUserId].username}</h1>
            </Link>
        )
    }
}

export default PrivateServerIndexItem;