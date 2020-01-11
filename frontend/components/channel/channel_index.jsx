import React from 'react';
import ChannelIndexItemContainer from './channel_index_item_container';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.channelId === preProps.match.params.channelId) {
            document.getElementsByClassName("channel-info")[0].focus();
        }
    }

    render() {
        if(this.props.server.channelIds.length === 0) return null;

        return(
            <ul className="channels-list">
                {
                    this.props.server.channelIds.sort((a, b) => a - b).map((channelId, idx) => <ChannelIndexItemContainer key={idx} channelId={channelId} />)
                }
            </ul>
        )
    }
}

export default withRouter(ChannelIndex);