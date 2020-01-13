import React from 'react';
import ChannelIndexContainer from './../channel/channel_index_container';

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
                            <li className="update-server" onClick={() => this.props.updateServerModal()}>Edit Server</li>
                            <li className="delete-server" onClick={this.handleDelete.bind(this)}>Delete Server</li>
                        </ul>
                    </div>
                    <h2 className="text-channels">TEXT CHANNELS</h2><i onClick={() => this.props.createChannelModal()} className="fa fa-plus"></i>
                    <ChannelIndexContainer server={server} />
                </div>
        );
    }
}

export default ServerShow;