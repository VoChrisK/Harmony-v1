import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    addServer(e) {
        e.preventDefault();
        const addServerModal = document.getElementsByClassName("add-server-modal")[0];
        addServerModal.classList.add("is-open");
        document.getElementsByClassName("modal-screen")[0].addEventListener("click", () => {
            addServerModal.classList.remove("is-open");
        })
    }

    render() {
        return (
            <aside className="servers-sidebar">
                {
                    this.props.servers.map((server, idx) => <ServerIndexItem key={idx} server={server} />)
                }
                <div onClick={this.addServer.bind(this)} id="add-server" className="server-icon-container"><h1 className="server-icon">+</h1></div>
            </aside>
        );
    }
}

export default ServerIndex;