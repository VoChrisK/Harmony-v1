import React from 'react';
import { Link } from 'react-router-dom';
import chooseColor from './../../util/choose_color';

class FriendIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { friend } = this.props;

        return (
            <Link className="friend-container" to="#">
                <div className={`user-icon icon-container ${chooseColor(friend.id)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </div>
                <i className={`fa fa-circle ${friend.status}`}></i>
                <h1 className="username">{friend.username}</h1>
                <h1 className="status">{friend.status}</h1>
                <i className="fas fa-user-times"></i>
            </Link>
        );
    }
}

export default FriendIndexItem;