import React from 'react';
import MessageIndexContainer from './../message/message_index_container';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
    }

    render() {
        return (
            <main className="main-content">
                <header className="channel-header">
                    <strong>#</strong><h1>this will display the channel header</h1>
                </header>

                <MessageIndexContainer />
                <aside className="users-list">

                </aside>
            </main>
        )
    }
}

export default MainContent;