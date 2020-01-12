App.channel = App.cable.subscriptions.create "ChannelChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    alert data.message.body
    # Called when there's incoming data on the websocket for this channel


# # $(".message-input").on 'keypress', '[data-behavior~=channel_speaker]', (event) ->
# #   if event.keyCode is 13 # return/enter = send
# App.channel.speak "test drive"
#     # event.target.value = ''
#     # event.preventDefault()