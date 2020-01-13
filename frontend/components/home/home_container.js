import { connect } from 'react-redux';
import Home from './home';
import { requestServers } from './../../actions/server_actions';
import { openModal } from './../../actions/modal_actions';
import { receiveCurrentUserId, logout } from './../../actions/session_actions';

const mapStateToProps = (state) => {
    return ({
        servers: Object.values(state.entities.servers),
        currentUserId: state.session.id
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        requestServers: () => dispatch(requestServers()),
        optionsModal: () => dispatch(openModal("options")),
        receiveCurrentUserId: userId => dispatch(receiveCurrentUserId(userId)),
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);