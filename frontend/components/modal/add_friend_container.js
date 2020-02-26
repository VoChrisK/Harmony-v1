import { connect } from 'react-redux';
import { createFriend } from './../../actions/friend_actions';
import { closeModal } from '../../actions/modal_actions';
import AddName from './add_name';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: "addFriend",
        errors: state.errors.general
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createFriend: (user1, user2) => dispatch(createFriend(user1, user2)),
        closeModal: () => dispatch(closeModal()),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddName);