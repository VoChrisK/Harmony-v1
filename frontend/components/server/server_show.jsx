import React from 'react';
import ChannelIndexContainer from './../channel/channel_index_container';
import { deleteAffiliation } from './../../util/affiliation_api_util';

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
        if(this.props.server) {
            if (this.props.match.params.serverId !== preProps.match.params.serverId) {
                this.props.requestServer(this.props.match.params.serverId);
            }
            else if (!preProps.server || this.props.server.userIds.length !== preProps.server.userIds.length) {
                this.props.requestServer(this.props.server.id);
            }
        }
    }

    showDropdown() {
        document.getElementsByClassName("server-dropdown")[0].classList.toggle("is-showing");
    }

    handleDelete() {
        this.props.deleteServerModal();
    }

    handleLeave() {
        deleteAffiliation(this.props.currentUserId, this.props.match.params.serverId).then(
            () => this.props.requestServers(this.props.currentUserId).then(
                () => this.props.history.push("/servers/@me")
            )
        );
    }

    render() {
        const { server } = this.props;
        if(!server) return null;
        this.renderChoice();

        return (
            <div className="server-show-container">
                <div onClick={this.showDropdown.bind(this)} className="server-name-container">
                    <h1 className="server-name">{server.name}</h1>
                    <i className="fa fa-chevron-down"></i>
                    <ul className="server-dropdown dropdown-menu">
                        <li className="update-server" onClick={() => this.props.updateServerModal()}>Edit Server</li>
                        <div></div>
                        {this.renderChoice()}
                    </ul>
                </div>
                <h2 className="text-channels">TEXT CHANNELS</h2><i onClick={() => this.props.createChannelModal()} className="fa fa-plus"></i>
                <ChannelIndexContainer server={server} />
            </div>
        );
    }

    renderChoice() {
        if(this.props.currentUserId === this.props.server.owner_id.toString()) {
            return <li className="delete-server" onClick={this.handleDelete.bind(this)}>Delete Server</li>
        }
        else {
            return <li className="leave-server" onClick={this.handleLeave.bind(this)}>Leave Server</li>
        }
    }
}

export default ServerShow;