import { REMOVE_MESSAGE, RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_MESSAGES:
            return Object.assign({}, action.messages);
        case RECEIVE_MESSAGE:
            nextState = Object.assign({}, state);
            nextState[action.message.id] = action.message;
            return nextState;
        case REMOVE_MESSAGE:
            nextState = Object.assign({}, state);
            delete nextState[action.messageId];
            return nextState;
        default:
            return state;
    };
}

export default messagesReducer;