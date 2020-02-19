import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("home-server").style.backgroundImage = `url(${harmonyIcon})`;
        document.getElementById("home-server").style.backgroundRepeat = "no-repeat";
        document.getElementById("home-server").style.backgroundPosition = "center center";
        document.getElementById("home-server").style.backgroundSize = '50px';
    }

    render() {
        return (
            <aside className="servers-sidebar">
                <Link id="home-server" className="server-icon-container icon-container" to="/servers/@me"></Link>
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