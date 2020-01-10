import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="servers-sidebar">
                {
                    this.props.servers.map((server, idx) => <ServerIndexItem key={idx} server={server} />)
                }
                <div onClick={() => this.props.optionsModal()} id="add-server" className="server-icon-container"><h1 className="server-icon">+</h1></div>
            </aside>
        );
    }
}

export default ServerIndex;