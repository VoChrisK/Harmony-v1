## Harmony

Harmony, an inspiration of Discord, is text chat application that allows users to communicate with other users in real time. This app allows users to create online communities in the form of servers and instantly invite other users. It also allows users to create multiple and separate chatrooms called text channels.

## Live Site Link

https://harmony-chat.herokuapp.com

## Technologies Used

* React 16.12.0
* Redux 4.0.5
* Ruby on Rails 5.2.4
* PostgreSQL 10.10
* Heroku

## Features

* **Servers**

Users are affiliated with multiple servers. A user can only see servers that they are affiliated with. Each server have an owner; only the owner has the ability to edit and delete the server. Users that are not owners can leave the server at any time.

![alt text](https://im6.ezgif.com/tmp/ezgif-6-0e390cceb595.gif)

Users affiliated with a server can invite other users at any time. Unlike discord, they do not require randomly generated links to send to other users. Any user can join other users' servers at any time!

* **Messages**

Users are able to interact with one another in real-time. They can write and send messages in a specific channel and others users will immediately see the messages. Users can update and delete messages in real-time as well and only users can modify their own messages.

Implementing live messaging involves the use of Action Cable, a built-in Rails library that specializes in websockets. The general idea is users subscribe to a channel that establishes the connection from the frontend to the backend. This allows users to receive data from the backend simultaneously, and therefore enables messaging in real-time. Here is a code snippet of Action Cable in action:

```javascript
App.cable.subscriptions.create(
    { channel: "ChannelChannel" },
    {
        received: data => {
            let messages;
            if(data.method === "create") {
                this.setState({ messages: this.state.messages.concat(data.message) });
            }
            else if(data.method === "update") {
                messages = this.state.messages.map(message => message.id === data.message.id ? data.message : message);
                this.setState({ messages: messages })
            } 
            else if(data.method === "delete") {
                messages = this.state.messages.filter(message => message.id !== data.message.id);
                this.setState({ messages: messages })
            }

            document.getElementById("chat-log").lastChild.scrollIntoView();

        },
        speak: function (data) {
            return this.perform("speak", data);
        }
    }
);
```

```ruby
  def subscribed
    # stream_from "channel_channel"
    stream_for 'channel_channel'
  end

  def speak(data)
    socket = { message: data['message'], method: data['method'] }
    ChannelChannel.broadcast_to('channel_channel', socket)
  end
```


## Future Features
* Direct messaging via private servers
* Friends, and sending friend requests in real time
* Create, update, and delete servers, channels, and users in real time
* Allow users to send images and set profile/server pictures through image hosting in AWS
* Voice channels
