import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';
import { deleteAffiliation } from './../../util/affiliation_api_util';
import { checkSession } from '../../util/session_check_util';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestChannels(this.props.match.params.serverId).then(
            () => {
                if(this.props.channels[0] !== "Invalid Credentials") {
                    document.getElementById(`channel-info-${this.props.match.params.channelId}`).classList.add("focus")
                }
            }
        );
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.serverId !== preProps.match.params.serverId || this.props.match.params.channelId !== preProps.match.params.channelId) {
            this.props.requestChannels(this.props.match.params.serverId).then(
                () => {
                    if (this.props.channels[0] !== "Invalid Credentials") {
                        this.clearFocus();
                        document.getElementById(`channel-info-${this.props.match.params.channelId}`).classList.add("focus")
                    }
                }
            );
        }
    }

    clearFocus() {
        for (let i = 0; i < document.getElementsByClassName("channel-info").length; i++) {
            document.getElementsByClassName("channel-info")[i].classList.remove("focus");
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

    renderChoice() {
        if (parseInt(this.props.currentUserId) === this.props.server.owner_id) {
            return (
                <ul className="server-dropdown dropdown-menu">
                    <li className="update-server" onClick={() => this.props.updateServerModal()}>Edit Server</li>
                    <div></div>
                    <li className="delete-server" onClick={this.handleDelete.bind(this)}>Delete Server</li>
                </ul>
            )
        }
        else {
            return (
                <ul className="server-dropdown dropdown-menu">
                    <li className="leave-server" onClick={this.handleLeave.bind(this)}>Leave Server</li>
                </ul>
            )

        }
    }

    render() {
        if (this.props.channels.length === 0 || !checkSession(this.props.channels[0], this.props.clearSession)) return null;
        const { server } = this.props;
        const flag = this.props.channels.length === 1;

        return(
            <div className="channel-index-container">
                <div onClick={this.showDropdown.bind(this)} className="server-name-container">
                    <h1 className="server-name">{server.name}</h1>
                    <i className="fa fa-chevron-down"></i>
                    {this.renderChoice()}
                </div>

                <div className="header-container">
                    <h2 className="inline-header">TEXT CHANNELS</h2>
                    <i onClick={() => this.props.createChannelModal()} className="fa fa-plus"></i>
                </div>

                <ul className="channels-list">
                    {
                        this.props.channels.map((channel, idx) => <ChannelIndexItemContainer key={idx} channel={channel} idx={idx} flag={flag} />)
                    }
                </ul>
            </div>
        )
    }
}

export default ChannelIndex