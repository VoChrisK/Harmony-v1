export const createMessage = message => {
    return ({
        method: "POST",
        url: "api/messages",
        data: { message }
    });
};

export const updateMessage = message => {
    return ({
        method: "PATCH",
        url: `api/messages/${message.id}`,
        data: { message }
    });
};

export const deleteMessage = messageId => {
    return ({
        method: "DELETE",
        url: `api/messages/${messageId}`
    });
};