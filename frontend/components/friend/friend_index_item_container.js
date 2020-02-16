import { connect } from 'react-redux'
import FriendIndexItem from './friend_index_item';
import { deleteFriend } from '../../actions/friend_actions';

const mapStateToProps = (state) => {
    return ({

    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteFriend: (userId1, userId2) => dispatch(deleteFriend(userId1, userId2))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndexItem)