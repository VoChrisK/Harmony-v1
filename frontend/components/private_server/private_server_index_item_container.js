import { connect } from 'react-redux';
import PrivateServerIndexItem from './private_server_index_item';
import { deleteServer } from '../../actions/server_actions';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        users: state.entities.users
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteServer: serverId => dispatch(deleteServer(serverId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateServerIndexItem);