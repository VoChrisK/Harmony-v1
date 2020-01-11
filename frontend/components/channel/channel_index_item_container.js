import { connect } from 'react-redux';
import { requestChannel } from './../../actions/channel_actions';
import ChannelIndexItem from './channel_index_item';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        channel: state.entities.channels[ownProps.channelId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestChannel: channelId => dispatch(requestChannel(channelId)),
        updateChannelModal: () => dispatch(openModal("updateChannel")),
        deleteChannelModal: () => dispatch(openModal("deleteServer"))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem));