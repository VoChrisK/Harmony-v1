import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestChannel(this.props.channelId);
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.serverId !== preProps.match.params.serverId) {
            this.props.requestChannel(this.props.channelId);
        }
    }

    render() {
        if(!this.props.channel) return null;

        return (
            <div className="channel-info">
                <i className="fa fa-hashtag"></i>
                <Link to={`/servers/${this.props.match.params.serverId}/${this.props.channelId}`} className="channel-name">{this.props.channel.name}</Link>
                <div className="channel-options">
                    <i onClick={() => this.props.updateChannelModal()} className="fa fa-edit"></i>
                    <i onClick={() => this.props.deleteChannelModal()} className="fa fa-trash"></i>
                </div>
            </div>
        )
    }
}

export default ChannelIndexItem;