import { connect } from 'react-redux';
import FriendIndex from './friend_index';
import { requestFriends } from './../../actions/friend_actions';

const mapStateToProps = (state) => {
    return ({
        friends: Object.values(state.entities.friends),
        currentUserId: state.session.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestFriends: userId => dispatch(requestFriends(userId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);