import React from 'react';
import MessageIndexContainer from './../message/message_index_container';
import UserIndexContainer from './../user/user_index_container';
import FriendIndexContainer from './../friend/friend_index_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { filterOnline } from '../../actions/online_actions';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { server, channel } = this.props;

        return (
            <main className="main-content">
                <header className="channel-header">
                    {channel ? <i className="fa fa-hashtag"></i> : server ? <i className="fas fa-at"></i> : this.renderFriendsHeader() }
                    {channel ? <h1 className="channel-name-header">{channel.name}</h1> : server ? this.renderUserInfo() : null }
                </header>
                {this.renderMainContent()}
                {this.renderUserIndex()}
            </main>
        )
    }

    renderFriendsHeader() {
        return (
            <ul className="friends-header">
                <li className="header friends-tab">
                    <i className="fa fa-user-friends"></i>
                    <h2 className="friends-tab-header">Friends</h2>
                </li>

                <li onClick={() => this.props.filterOnline("Online")} className="show-friends"><h1>Online</h1></li>

                <li onClick={() => this.props.filterOnline("All")} className="show-friends"><h1>All</h1></li>

                <button onClick={() => this.props.addFriend()} className="add-friend">Add Friend</button>
            </ul>
        )
    }

    renderUserInfo() {
        if (Object.keys(this.props.users).length === 0 || Object.keys(this.props.server.userIds).length === 0 ) return null;
        const index = this.props.server.userIds.filter(id => id != this.props.currentUserId)[0];
        const otherUser = this.props.users[index];
        return (
            <h1 className="channel-name-header">
                {otherUser.username}
                <i className={`header fa fa-circle ${otherUser.status}`}></i>
            </h1>
        )
    }

    renderMainContent() {
        const privateServerRegex = /\/servers\/@me\/?[0-9]*/g;
        const homeRegex = /^\/servers\/@me\/?$/g;
        const path = this.props.location.pathname;

        if (Boolean(path.match(homeRegex))) {
            return <FriendIndexContainer />
        } else if (Boolean(path.match(privateServerRegex))) {
            return <MessageIndexContainer inputType="server" /> 
        } else {
            return <MessageIndexContainer inputType="channel" />
        }
    }

    renderUserIndex() {
        const regex = /\/servers\/@me\/?[0-9]*/g;
        const path = this.props.location.pathname;

        if (Boolean(path.match(regex))) {
            return null;
        } else {
            return <UserIndexContainer /> 
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.privateServers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId],
        users: state.entities.users,
        currentUserId: state.session.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        addFriend: () => dispatch(openModal("addFriend")),
        filterOnline: status => dispatch(filterOnline(status))
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContent));