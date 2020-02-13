import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';
import { requestMessages, createMessage } from './../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        messages: Object.values(state.entities.messages),
        currentUserId: state.session.id,
        channel: ownProps.channel
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestMessages: channelId => dispatch(requestMessages(channelId)),
        createMessage: message => dispatch(createMessage(message))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));