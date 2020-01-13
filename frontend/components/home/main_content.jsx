import React from 'react';
import MessageIndexContainer from './../message/message_index_container';
import { withRouter } from 'react-router-dom';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.renderContent();
    }

    renderContent() {
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
                        <h1 className="channel-name-header">test</h1>
                    </header>
                    <MessageIndexContainer />
                    <aside className="users-list">

                    </aside>
                </main>
            )
        }
    }
}

export default withRouter(MainContent);