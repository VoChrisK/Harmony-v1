import React from 'react';
import MessageIndexContainer from './../message/message_index_container';
import UserIndexContainer from './../user/user_index_container';
import FriendIndexContainer from './../friend/friend_index_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (document.getElementsByClassName("main-content home").length > 0) {
            document.getElementsByClassName("main-content home")[0].style.background = `url(${wumpus}) no-repeat center center`;
            document.getElementsByClassName("main-content home")[0].style.backgroundSize = '500px'; 
            document.getElementsByClassName("main-content home")[0].style.backgroundColor = "#36393f";
        }
    }

    componentDidUpdate() {
        if (document.getElementsByClassName("main-content home").length > 0) {
            document.getElementsByClassName("main-content home")[0].style.background = `url(${wumpus}) no-repeat center center`;
            document.getElementsByClassName("main-content home")[0].style.backgroundSize = '500px';
            document.getElementsByClassName("main-content home")[0].style.backgroundColor = "#36393f";
        } 
        else if (document.getElementsByClassName("main-content").length > 0) {
            document.getElementsByClassName("main-content")[0].style.backgroundImage = "none";
        }
    }

    render() {
        if((!this.props.channel && !this.props.server)) return null;
        if (this.props.server && Object.keys(this.props.users).length === 0) return null;

        const { server, channel } = this.props;

        return (
            <main className="main-content">
                <header className="channel-header">
                    {channel ? <i className="fa fa-hashtag"></i> : server ? <i className="fas fa-at"></i> : "" }
                    {channel ? <h1 className="channel-name-header">{channel.name}</h1> : server ? this.renderUserInfo() : "" }
                </header>
                {this.renderMainContent()}
                {this.renderUserIndex()}
            </main>
        )
    }

    renderUserInfo() {
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
        const homeRegex = /\/servers\/@me\/?/g;
        const path = this.props.location.pathname;

        console.log(path.match(homeRegex));
        if (Boolean(path.match(privateServerRegex))) {
            return <MessageIndexContainer input={this.props.server} inputType="server" /> 
        } else if (Boolean(path.match(homeRegex))) {
            return <FriendIndexContainer />
        } else {
            return <MessageIndexContainer input={this.props.channel} inputType="channel" />
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

export default withRouter(connect(mapStateToProps, null)(MainContent));