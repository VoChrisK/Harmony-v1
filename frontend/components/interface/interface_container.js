import { connect } from 'react-redux';
import Interface from './interface';
import { requestServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';
import { receiveCurrentUserId } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        servers: Object.values(state.entities.servers),
        currentUserId: state.session.id,
        server: state.entities.privateServers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId]
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        requestServers: userId => dispatch(requestServers(userId)),
        optionsModal: () => dispatch(openModal("options")),
        receiveCurrentUserId: userId => dispatch(receiveCurrentUserId(userId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Interface));