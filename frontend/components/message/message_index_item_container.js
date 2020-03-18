import { updateMessage, deleteMessage } from "../../actions/message_actions";
import { connect } from 'react-redux';
import MessageIndexItem from './message_index_item';
import { withRouter } from 'react-router-dom';
import { requestUserInfo } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        message: ownProps.message,
        users: ownProps.users,
        idx: ownProps.idx,
        currentUserId: state.session.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateMessage: message => dispatch(updateMessage(message)),
        deleteMessage: messageId => dispatch(deleteMessage(messageId)),
        requestUserInfo: userInfo => dispatch(requestUserInfo(userInfo))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndexItem));