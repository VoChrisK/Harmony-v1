import { connect } from 'react-redux';
import { findUser } from './../../actions/user_actions';
import { createPrivateServer, requestPrivateServer } from '../../actions/server_actions';
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
        findUser: username => dispatch(findUser(username)),
        createPrivateServer: server => dispatch(createPrivateServer(server)),
        requestPrivateServer: serverId => dispatch(requestPrivateServer(serverId)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AddName);