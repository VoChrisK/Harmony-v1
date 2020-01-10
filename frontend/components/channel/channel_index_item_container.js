import { connect } from 'react-redux';
import { requestChannel } from './../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        channel: state.entities.channels[ownProps.channelId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestChannel: channelId => dispatch(requestChannel(channelId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem));