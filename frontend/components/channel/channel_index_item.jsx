import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("channel-info")[0].focus();
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.serverId !== preProps.match.params.serverId) {
            document.getElementsByClassName("channel-info")[0].focus();
        }
        else if(this.props.match.params.channelId !== preProps.match.params.channelId) {
            document.getElementById(`channel-info-${this.props.match.params.channelId}`).focus();
        }
    }

    render() {
        if(!this.props.channel) return null;

        return (
            <Link to={`/servers/${this.props.match.params.serverId}/${this.props.channel.id}`} className="channel-info" id={`channel-info-${this.props.channel.id}`}>
                <i className="fa fa-hashtag"></i>
                <strong className="channel-name">{this.props.channel.name}</strong>
                <div className="channel-options">
                    <i onClick={() => this.props.updateChannelModal()} className="fa fa-edit"></i>
                    <i onClick={() => this.props.deleteChannelModal()} className="fa fa-trash"></i>
                </div>
            </Link>
        )
    }
}

export default ChannelIndexItem;