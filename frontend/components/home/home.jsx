import React from 'react';
import ServerIndex from './../server/server_index';
import ServerShowContainer from './../server/server_show_container';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.requestServers();
    }

    handleInput(input) {
        return e => {
            this.setState({ [input]: e.target.value });
        };
    }

    createServer(event) {
        event.preventDefault();
        const server = Object.assign({}, {"name": this.state.name}, {"owner_id": this.props.currentUserId});
        this.props.createServer(server);
        this.setState({name: ""});
        document.getElementsByClassName("add-server-modal")[0].classList.remove("is-open");
    }

    render() {
        if(this.props.servers.length === 0) return null;
        const currentUser = window.localStorage.getItem("currentUserId") || this.props.currentUserId;
        window.localStorage.setItem("currentUserId", currentUser);

        return (
            <div className="home-interface">
                <ServerIndex servers={this.props.servers} />

                <aside className="channels-and-dms-sidebar">
                    <ServerShowContainer />
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

                <div className="modal add-server-modal">
                    <section className="modal-screen"></section>
                    { this.addNextModal() }
                </div>
            </div>
        );
    }

    addModal() {
        return (
            <section className="modal-container">
                    <h1>OH, ANOTHER SERVER HUH?</h1>
                    <div className="create-option options">
                        <h1>CREATE</h1>
                        <p>Create a new server and invite your friends. It's free!</p>
                        <div className="create-icon"></div>
                        <button onClick={this.addNextModal.bind(this)}>Create a server</button>
                    </div>
                    <div className="join-option options">
                        <h1>JOIN</h1>
                        <p>Enter an invite and join your friend's server.</p>
                        <div className="join-icon"></div>
                        <button>Join a server</button>
                    </div>
            </section>
        );
    }

    addNextModal() {
        return (
            <section className="modal-container">
                <h1>CREATE YOUR SERVER</h1>
                <p>By creating a new server, you will have access to free <strong>text</strong> chat to use amongst your friends.</p>
                <form onSubmit={this.createServer.bind(this)}>
                    <label htmlFor="server-name" className="form-label">SERVER NAME</label>
                    <input className="create-server-input" type="text" name="name" id="server-name" onChange={this.handleInput("name")} />
                    <input className="create-server" type="submit" value="Create"/>
                </form>
                <span>← BACK</span>
            </section>
        );
    }
}

export default Home;