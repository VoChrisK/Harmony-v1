export const fetchChannelMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: "api/channel_messages",
        data: {
            channel_message: {
                channel_id: channelId
            }
        }
    })
}

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