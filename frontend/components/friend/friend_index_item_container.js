import { connect } from 'react-redux'
import FriendIndexItem from './friend_index_item';
import { deleteFriend } from '../../actions/friend_actions';
import { createPrivateServer, requestPrivateServer } from '../../actions/server_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createPrivateServer: server => dispatch(createPrivateServer(server)),
        requestPrivateServer: serverId => dispatch(requestPrivateServer(serverId)),
        deleteFriend: (userId1, userId2) => dispatch(deleteFriend(userId1, userId2))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndexItem)