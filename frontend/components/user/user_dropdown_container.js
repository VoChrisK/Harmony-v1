import { connect } from 'react-redux';
import UserDropdown from './user_dropdown';
import { createMessage } from '../../actions/message_actions';
import { openModal } from '../../actions/modal_actions';
import { createPrivateServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        userInfo: state.ui.info,
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createMessage: message => dispatch(createMessage(message)),
        createPrivateServer: server => dispatch(createPrivateServer(server)),
        userProfile: (userId) => dispatch(openModal("userProfile", userId)),
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserDropdown));