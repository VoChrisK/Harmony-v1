import { connect } from 'react-redux';
import { createPrivateServer } from '../../actions/server_actions';
import AddName from './add_name';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors, receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: "newDM",
        errors: state.errors.general
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createPrivateServer: server => dispatch(createPrivateServer(server)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddName);