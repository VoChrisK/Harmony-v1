import React from 'react';
import ChannelIndex from './../channel/channel_index';

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.match.params.serverId) {
            this.props.requestServer(this.props.match.params.serverId);
        }
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.serverId !== preProps.match.params.serverId) {
            this.props.requestServer(this.props.match.params.serverId);
        }
    }

    showDropdown(event) {
        document.getElementsByClassName("server-dropdown")[0].classList.add("is-showing");
        document.getElementsByClassName("harmony-app")[0].removeEventListener
        document.getElementsByClassName("harmony-app")[0].addEventListener("click", () => {
            document.getElementsByClassName("server-dropdown")[0].classList.remove("is-showing");
        });
    }

    handleDelete() {
        this.props.deleteServerModal();
    }

    render() {
        const { server } = this.props;
        if(!server) return null;

        return (
            <div className="server-show-container">
                <div onClick={this.showDropdown.bind(this)} className="server-name-container">
                    <h1 className="server-name">{server.name}</h1>
                    <ul className="server-dropdown dropdown-menu">
                        <li onClick={() => this.props.updateServerModal()}>Edit Server</li>
                        <li onClick={this.handleDelete.bind(this)}>Delete Server</li>
                    </ul>
                </div>
                <h2>TEXT CHANNELS</h2>
                <ChannelIndex server={server} />
            </div>
        );
    }
}

export default ServerShow;