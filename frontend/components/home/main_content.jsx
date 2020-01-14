import React from 'react';
import MessageIndexContainer from './../message/message_index_container';
import UserIndexContainer from './../user/user_index_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.renderContent();
    }

    renderContent() {
        const { channel } = this.props;
        console.log(channel);
    
        if(this.props.match.path === "/servers/@me") {
            return ( 
                <main className="main-content">
                    <header className="channel-header"></header>
                    <aside className="users-list"></aside>
                </main> 
            )
        } else {
            return (
                <main className="main-content">
                    <header className="channel-header">
                        <i className="fa fa-hashtag"></i>
                        <h1 className="channel-name-header">{channel ? channel.name : ""}</h1>
                    </header>
                    <MessageIndexContainer channel={channel} />
                    <UserIndexContainer />
                </main>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        channel: state.entities.channels[ownProps.match.params.channelId]
    });
};

export default withRouter(connect(mapStateToProps, null)(MainContent));