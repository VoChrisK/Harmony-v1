import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return({
        errors: state.errors,
        formType: 'login'
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        processForm: user => dispatch(login(user)),
        updateUser: user => dispatch(updateUser(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);