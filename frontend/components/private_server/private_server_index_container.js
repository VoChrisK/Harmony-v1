import { connect } from 'react-redux';
import PrivateServerIndex from './private_server_index';
import { requestPrivateServers } from '../../actions/server_actions';

const mapStateToProps = (state) => {
    return ({
        servers: Object.values(state.entities.privateServers),
        currentUserId: state.session.id
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestPrivateServers: currentUserId => dispatch(requestPrivateServers(currentUserId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateServerIndex);