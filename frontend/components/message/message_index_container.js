import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageIndex from './message_index';
import { requestMessages, createMessage } from './../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        messages: Object.values(state.entities.messages),
        currentUserId: state.session.id,
        input: ownProps.input,
        inputType: ownProps.inputType,
        users: state.entities.users
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestMessages: (input, inputId) => dispatch(requestMessages(input, inputId)),
        createMessage: message => dispatch(createMessage(message))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));