import React from 'react';
import { createAffiliation } from './../../util/affiliation_api_util';
import chooseColor from './../../util/choose_color';
import { withRouter } from 'react-router-dom';
import setIcons from '../../util/set_icons';

class FriendIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setIcons(this.props.friend.id);
    }

    handlePrivateServer(event) {
        event.preventDefault();
        let users = [this.props.currentUser.id, this.props.friend.id].sort();
        const server = Object.assign({}, { "name": `DM ${users[0]} and ${users[1]}` });
        this.props.createPrivateServer(server).then(
            newServer => {
                createAffiliation(this.props.currentUser.id, newServer.server.id);
                createAffiliation(this.props.friend.id, newServer.server.id).then(
                    () => {
                        this.props.requestPrivateServer(newServer.server.id).then(
                            () => this.props.history.push(`/servers/@me/${newServer.server.id}`)
                        );
                    }
                );
            }
        );
    }

    handleDelete(event) {
        event.stopPropagation();
        this.props.deleteFriend(this.props.currentUser.id, this.props.friend.id);
    }

    render() {
        const { friend } = this.props;

        return (
            <div onClick={this.handlePrivateServer.bind(this)} className="friend-container">
                <div className="friend-info-container">
                    <div className={`user-icon icon-container ${chooseColor(friend.id)}`}>
                        <img className={`discord-icon ${friend.id}`} src={discordIcon} alt="" />
                    </div>
                    <i className={`fa fa-circle ${friend.status}`}></i>
                    <h1 className="username">{friend.username}</h1>
                </div>
                <h1 className="status">{friend.status}</h1>
                <i onClick={this.handleDelete.bind(this)} className="fas fa-user-times"></i>
            </div>
        );
    }
}

export default withRouter(FriendIndexItem);