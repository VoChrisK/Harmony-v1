import * as MessageApiUtil from './../util/message_api_util';

const receiveMessage = message => {
    return ({
        type: "RECEIVE_MESSAGE",
        message
    });
};

const removeMessage = messageId => {
    return ({
        type: "REMOVE_MESSAGE",
        messageId
    });
};

export const createMessage = message => dispatch => {
    return MessageApiUtil.createMessage(message).then(
        newMessage => dispatch(receiveMessage(newMessage))
    );
};

export const updateMessage = message => dispatch => {
    return MessageApiUtil.updateMessage(message).then(
        newMessage => dispatch(receiveMessage(newMessage))
    );
};

export const deleteMessage = messageId => dispatch => {
    return MessageApiUtil.deleteMessage(messageId).then(
        () => dispatch(removeMessage(messageId))
    );
};

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";