import React from 'react';
import MessageIndexContainer from './../message/message_index_container';
import UserIndexContainer from './../user/user_index_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (Boolean(document.getElementById("home"))) {
            document.getElementById("home").style.background = `url(${wumpus}) no-repeat center center #36393f`;
            document.getElementById("home").style.backgroundSize = '500px'; 
        }
    }

    render() {
        return this.renderContent();
    }

    renderContent() {
        const { channel } = this.props;
    
        if(this.props.match.path === "/servers/@me") {
            return ( 
                <main id="home" className="main-content2">
                    <header className="channel-header"></header>
                    <h1 className="poor-wumpus">No one's around to play with wumpus</h1>
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