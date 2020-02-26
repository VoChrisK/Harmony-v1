import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import AddName from './add_name';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: "editName",
        errors: state.errors.general
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: user => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddName);