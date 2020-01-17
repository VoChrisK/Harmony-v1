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
        return this.renderContent();
    }

    renderContent() {
        const { channel } = this.props;
    
        if(this.props.match.path === "/servers/@me") {
            return ( 
                <main className="main-content home">
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