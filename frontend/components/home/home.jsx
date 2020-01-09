import React from 'react';
import ServerIndexItem from './server_index_item';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            server: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.getServerInfo = this.getServerInfo.bind(this);
    }

    componentDidMount() {
        this.props.requestServers();
    }

    addServer(e) {
        e.preventDefault();
        const addServerModal = document.getElementsByClassName("add-server-modal")[0];
        addServerModal.classList.add("is-open");
        document.getElementsByClassName("modal-screen")[0].addEventListener("click", () => {
            addServerModal.classList.remove("is-open");
        })
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

    getServerInfo(event, server) {
        // this.props.requestServer(server.id);
        this.setState({ server: server });
    }

    render() {
        return (
            <div className="home-interface">
                <aside className="servers-sidebar">
                    {
                        this.props.servers.map((server, idx) => (
                        <div onClick={(event) => this.getServerInfo(event, server)} className="server-icon-container" key={idx}>
                            <h1 className="server-icon">{server.name.substring(0, 1)}</h1>
                        </div>
                        ))
                    }
                    <div onClick={this.addServer.bind(this)} className="server-icon-container add-server"><h1 className="server-icon">+</h1></div>
                </aside>

                <aside className="channels-and-dms-sidebar">
                    {
                        this.state.server ? 
                        <div className="server-name-container"><h1 className="server-name">{this.state.server.name}</h1></div> : null
                    }
                </aside>

                <main className="main-content">

                </main>

                <div className="modal add-server-modal">
                    <section className="modal-screen"></section>
                    { this.addModal() }
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