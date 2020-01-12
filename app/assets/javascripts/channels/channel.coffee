App.channel = App.cable.subscriptions.create "ChannelChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    $('#chat-log').append '<div class="message">' + '<p>' + data.message.body + '</p>' + '<strong>' + data.message.created_at + '</strong>' + '</div>'
    # Called when there's incoming data on the websocket for this channel
