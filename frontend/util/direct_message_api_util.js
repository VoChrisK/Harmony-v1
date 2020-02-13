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