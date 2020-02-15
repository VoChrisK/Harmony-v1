export const fetchDirectMessages = (serverId) => {
    return $.ajax({
        method: "GET",
        url: "api/direct_messages",
        data: {
            direct_message: {
                server_id: serverId
            }
        }
    })
}

export const createDirectMessage = (messageId, serverId) => {
    return $.ajax({
        method: "POST",
        url: "api/direct_messages",
        data: {
            direct_message: {
                message_id: messageId,
                server_id: serverId
            }
        }
    });
};