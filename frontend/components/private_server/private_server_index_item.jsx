import React from 'react';
import chooseColor from './../../util/choose_color';
import { Link, withRouter, Redirect } from 'react-router-dom';
import setIcons from './../../util/set_icons';

class PrivateServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.otherUserId = this.props.server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        this.otherUser = this.props.users[this.otherUserId] || this.props.friends[this.otherUserId];
    }
    
    componentDidMount() {
        setIcons(this.otherUserId);
    }

    handleDelete() {
        this.props.deleteServer(this.props.server.id).then(
            () => this.props.history.push("/servers/@me")
        )
    }

    render() {
        this.otherUserId = this.props.server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        this.otherUser = this.props.users[this.otherUserId] || this.props.friends[this.otherUserId];
        if(!this.otherUser) return null;

        return (
            <Link to={`/servers/@me/${this.props.server.id}`} className="user-info" id={`user-info-${this.props.server.id}`}>
                <div className={`user-icon icon-container ${chooseColor(this.otherUserId)}`}>
                    <img className={`discord-icon ${this.otherUserId}`} src={discordIcon} alt="" />
                </div>
                <i className={`fa fa-circle ${this.otherUser.status}`}></i>
                <h1 className="username">{this.otherUser.username}</h1>
                <i onClick={this.handleDelete.bind(this)} className="far fa-times-circle"></i>
            </Link>
        )
    }
}

export default withRouter(PrivateServerIndexItem);