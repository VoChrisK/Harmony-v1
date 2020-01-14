import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="servers-sidebar">
                <Link className="home-server server-icon-container icon-container" to="/servers/@me"></Link>
                <div className="line"></div>
                {
                    this.props.servers.map((server, idx) => <ServerIndexItem key={idx} server={server} />)
                }
                <div onClick={() => this.props.optionsModal()} className="add-server icon-container"><h1 className="server-icon">+</h1></div>
            </aside>
        );
    }
}

export default ServerIndex;