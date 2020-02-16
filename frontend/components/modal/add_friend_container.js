import { connect } from 'react-redux';
import { createFriend } from './../../actions/friend_actions';
import { closeModal } from '../../actions/modal_actions';
import AddName from './add_name';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: "addFriend"
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createFriend: (user1, user2) => dispatch(createFriend(user1, user2)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddName);