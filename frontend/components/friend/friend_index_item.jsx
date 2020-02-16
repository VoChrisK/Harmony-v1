import React from 'react';
import { Link } from 'react-router-dom';
import chooseColor from './../../util/choose_color';

class FriendIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { friend, currentUserId } = this.props;

        return (
            <div className="friend-container">
                <Link to="#" className={`user-icon icon-container ${chooseColor(friend.id)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </Link>
                <i className={`fa fa-circle ${friend.status}`}></i>
                <h1 className="username">{friend.username}</h1>
                <h1 className="status">{friend.status}</h1>
                <i onClick={() => this.props.deleteFriend(currentUserId, friend.id)} className="fas fa-user-times"></i>
            </div>
        );
    }
}

export default FriendIndexItem;