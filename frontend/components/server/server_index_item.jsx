import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="server-icon-container icon-container" to={`/servers/${this.props.server.id}/${this.props.server.channelIds[0]}`}>
                <h1 className="server-icon">{this.props.server.name.substring(0, 1)}</h1>
            </Link>
        );
    }
}

export default ServerIndexItem;