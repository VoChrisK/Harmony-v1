import { connect } from 'react-redux';
import PrivateServerIndexItem from './private_server_index_item';
import { requestUsers } from './../../actions/user_actions';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        users: state.entities.users
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestUsers: serverId => dispatch(requestUsers(serverId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateServerIndexItem);