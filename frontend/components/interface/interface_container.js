import { connect } from 'react-redux';
import Interface from './interface';
import { requestServers } from '../../actions/server_actions';
import { openModal } from '../../actions/modal_actions';
import { receiveCurrentUserId } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return ({
        servers: Object.values(state.entities.servers),
        currentUserId: state.session.id
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        requestServers: userId => dispatch(requestServers(userId)),
        optionsModal: () => dispatch(openModal("options")),
        receiveCurrentUserId: userId => dispatch(receiveCurrentUserId(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Interface);