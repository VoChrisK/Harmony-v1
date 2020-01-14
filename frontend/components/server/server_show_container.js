import { connect } from 'react-redux';
import ServerShow from './server_show';
import { requestServers, requestServer } from './../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from './../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.servers[ownProps.match.params.serverId],
        currentUserId: state.session.id
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestServers: userId => dispatch(requestServers(userId)),
        requestServer: serverId => dispatch(requestServer(serverId)),
        createChannelModal: () => dispatch(openModal("createChannel")),
        updateServerModal: () => dispatch(openModal("updateServer")),
        deleteServerModal: () => dispatch(openModal("deleteServer"))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));