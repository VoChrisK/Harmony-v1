import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestChannels(this.props.match.params.serverId);
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.serverId !== preProps.match.params.serverId) {
            this.props.requestChannels(this.props.match.params.serverId);
        }
    }

    render() {
        if(!this.props.channels) return null;

        return(
                <ul className="channels-list">
                    {
                        this.props.channels.map((channel, idx) => <ChannelIndexItemContainer key={idx} channel={channel} />)
                    }
                </ul>
        )
    }
}

export default ChannelIndex