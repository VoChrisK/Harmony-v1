class ChannelChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "channel_channel"
    stream_for 'channel_channel'
  end

  def speak(data)
    socket = { message: data['message'] }
    ChannelChannel.broadcast_to('channel_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
