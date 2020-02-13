export const createChannelMessage = (messageId, channelId) => {
    return $.ajax({
        method: "POST",
        url: "api/channel_messages",
        data: {
            channel_message: {
                message_id: messageId,
                channel_id: channelId
            }
        }
    });
};