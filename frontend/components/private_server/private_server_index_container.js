import { connect } from 'react-redux';
import PrivateServerIndex from './private_server_index';
import { requestPrivateServers } from './../../actions/server_actions';
import { requestUsersByIds } from './../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import { clearSession } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return ({
        servers: Object.values(state.entities.privateServers),
        currentUserId: state.session.id
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestPrivateServers: currentUserId => dispatch(requestPrivateServers(currentUserId)),
        requestUsersByIds: userIds => dispatch(requestUsersByIds(userIds)),
        newDirectMessage: () => dispatch(openModal("newDM")),
        clearSession: () => dispatch(clearSession())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateServerIndex);