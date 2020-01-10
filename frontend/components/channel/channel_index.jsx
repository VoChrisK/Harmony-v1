import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.server.channelIds.length === 0) return null;

        return(
            <ul className="channels-list">
                {
                    this.props.server.channelIds.map((channelId, idx) => <ChannelIndexItemContainer key={idx} channelId={channelId.id} />)
                }
            </ul>
        )
    }
}

export default ChannelIndex;