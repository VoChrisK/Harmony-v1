import React from 'react';
import chooseColor from './../../util/choose_color';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PrivateServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleDelete() {
        this.props.deleteServer(this.props.server.id).then(
            () => this.props.history.push("/servers/@me")
        )
    }

    render() {
        const otherUserId = this.props.server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        const otherUser = this.props.users[otherUserId] || this.props.friends[otherUserId];
        if(!otherUser) return null;

        return (
            <Link to={`/servers/@me/${this.props.server.id}`} className="user-info" id={`user-info-${this.props.server.id}`}>
                <div className={`user-icon icon-container ${chooseColor(otherUserId)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </div>
                <i className={`fa fa-circle ${otherUser.status}`}></i>
                <h1 className="username">{otherUser.username}</h1>
                <i onClick={this.handleDelete.bind(this)} className="far fa-times-circle"></i>
            </Link>
        )
    }
}

export default withRouter(PrivateServerIndexItem);