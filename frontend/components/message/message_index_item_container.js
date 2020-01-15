import { updateMessage, deleteMessage } from "../../actions/message_actions";
import { connect } from 'react-redux';
import MessageIndexItem from './message_index_item';

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
        deleteMessage: messageId => dispatch(deleteMessage(messageId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndexItem);