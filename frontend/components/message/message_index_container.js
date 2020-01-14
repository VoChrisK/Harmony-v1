import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';
import { requestMessages, createMessage } from './../../actions/message_actions';

const mapStateToProps = (state) => {
    return ({
        messages: Object.values(state.entities.messages),
        currentUserId: state.session.id
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestMessages: channelId => dispatch(requestMessages(channelId)),
        createMessage: (message, channelId) => dispatch(createMessage(message, channelId)),
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));