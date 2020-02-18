import { connect } from 'react-redux';
import FriendIndex from './friend_index';

const mapStateToProps = (state) => {
    return ({
        friends: Object.values(state.entities.friends),
        currentUserId: state.session.id,
        status: state.ui.status
    });
};

export default connect(mapStateToProps, null)(FriendIndex);