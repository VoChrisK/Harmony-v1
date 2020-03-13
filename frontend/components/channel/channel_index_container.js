import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';
import { openModal } from './../../actions/modal_actions';
import { requestServers } from '../../actions/server_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        channels: Object.values(state.entities.channels),
        server: ownProps.server,
        currentUserId: state.session.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestChannels: serverId => dispatch(requestChannels(serverId)),
        requestServers: currentUserId => dispatch(requestServers(currentUserId)),
        createChannelModal: () => dispatch(openModal("createChannel")),
        updateServerModal: () => dispatch(openModal("updateServer")),
        deleteServerModal: () => dispatch(openModal("deleteServer"))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndex));