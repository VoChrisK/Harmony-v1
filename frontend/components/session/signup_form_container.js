import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import { requestServer } from './../../actions/server_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
    return ({
        errors: state.errors.session,
        formType: 'signup'
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: user => dispatch(signup(user)),
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        requestServer: serverId => dispatch(requestServer(serverId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);