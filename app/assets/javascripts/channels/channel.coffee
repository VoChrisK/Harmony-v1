App.channel = App.cable.subscriptions.create "ChannelChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    $('#chat-log').append '<div class="live-message-container">' + '<div class="message-info">' + '<h1 class="message-author">' + data.author.username + '</h1>' + '<strong class="message-date">' + data.date + '</strong>' + '<strong class="message-time">' + " at " + data.time + '</strong>' + '<i class="fa fa-ellipsis-v"></i>' + '<p class=message-body>' + data.body + '</p>' + '</div>' + '</div>'
    # Called when there's incoming data on the websocket for this channel
