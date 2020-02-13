import { connect } from 'react-redux';
import { createPrivateServer } from '../../actions/server_actions';
import UserIndexItem from './user_index_item';
import { withRouter } from 'react-router-dom';
import { createMessage } from '../../actions/message_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createPrivateServer: server => dispatch(createPrivateServer(server)),
        createMessage: message => dispatch(createMessage(message))
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndexItem));