import { connect } from 'react-redux';
import ServerForm from './server_form';
import { updateServer } from './../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from './../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        formType: 'update',
        errors: state.errors.general
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: server => dispatch(updateServer(server)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));