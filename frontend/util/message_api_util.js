export const fetchMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: "api/messages",
        data: {
            channel: {
                id: channelId
            }
        }
    });
};

export const createMessage = (message, channelId) => {
    return $.ajax({
        method: "POST",
        url: "api/messages",
        data: { 
            message,
            channel: {
                id: channelId
            }
        }
    });
};

export const updateMessage = message => {
    return $.ajax({
        method: "PATCH",
        url: `api/messages/${message.id}`,
        data: { message }
    });
};

export const deleteMessage = messageId => {
    return $.ajax({
        method: "DELETE",
        url: `api/messages/${messageId}`
    });
};