import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';
import { createMessage, requestChannelMessages, requestDirectMessages } from './../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        messages: Object.values(state.entities.messages),
        currentUserId: state.session.id,
        users: state.entities.users,
        friends: state.entities.friends,
        input: ownProps.inputType === "server" ? state.entities.privateServers[ownProps.match.params.serverId] : state.entities.channels[ownProps.match.params.channelId]
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestChannelMessages: channelId => dispatch(requestChannelMessages(channelId)),
        requestDirectMessages: serverId => dispatch(requestDirectMessages(serverId)),
        createMessage: message => dispatch(createMessage(message))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));