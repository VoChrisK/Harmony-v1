import React from 'react';
import ServerIndex from './../server/server_index';
import ServerShowContainer from './../server/server_show_container';
import Modal from './../modal/modal';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestServers();

        if(Boolean(window.localStorage.getItem("currentUserId"))) {
            this.props.receiveCurrentUserId(window.localStorage.getItem("currentUserId"));
        } else {
            window.localStorage.setItem("currentUserId", this.props.currentUserId);
        }
        
    }

    logout() {
        this.props.logout();
        window.localStorage.clear();
    }
    
    render() {
        // if (this.props.servers.length === 0) return null;
        return (
            <div className="home-interface">
                <Modal />
                <ServerIndex servers={this.props.servers} optionsModal={this.props.optionsModal} />

                <aside className="channels-and-dms-sidebar">
                    <ServerShowContainer />
                    <div className="user-options">
                        <button className="logout" onClick={this.logout.bind(this)}>Logout</button>
                    </div>
                </aside>

                <main className="main-content">
                    <header className="channel-header">
                        <strong>#</strong><h1>this will display the channel header</h1>
                    </header>

                    <section className="chat-container">
                        <section className="chat-log"></section>

                        <form className="message-input-container">
                            <input type="text" className="message-input" placeholder="message #channel" />
                        </form>
                    </section>

                    <aside className="users-list">

                    </aside>
                </main>
            </div>
        );
    }
}

export default Home;