import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link onClick={ Boolean(this.props.closeModal) ? () => this.props.closeModal() : null } className="server-icon-container icon-container" to={`/servers/${this.props.server.id}/${this.props.server.channelIds[0]}`}>
                    <h1 className="server-icon">{this.props.server.name.substring(0, 1)}</h1>
                </Link>

                <h1 className="name-tooltip tooltip">{this.props.server.name}</h1>
            </div>
        );
    }
}

export default ServerIndexItem;