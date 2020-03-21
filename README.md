## Harmony

Harmony, an inspiration of Discord, is text chat application that allows users to communicate with other users in real time.

[Live Site](https://harmony-chat.herokuapp.com)

![gif 1](https://github.com/VoChrisK/Harmony/blob/master/app/assets/images/harmony-gif-1.gif)

## Technologies Used

* React 16.12.0
* Redux 4.0.5
* Ruby on Rails 5.2.4
* PostgreSQL 10.10
* Heroku

## Features

* **Servers**

Users are affiliated with multiple servers, or online communities. A user can only see servers that they are affiliated with. Each server have an owner; only the owner has the ability to edit and delete the server. Users that are not owners can leave the server at any time. Leaving the server **will not** delete it.

Users affiliated with a server can invite other users at any time. Unlike Discord, they do not require randomly generated links to send to other users. Any user can join other users' servers at any time! (**Note:** Users cannot invite other users into their private servers)

![gif 2](https://github.com/VoChrisK/Harmony/blob/master/app/assets/images/harmony-gif-2.gif)

When users send direct messages, they are sending them to private servers, or servers that only host strictly two users. To differentiate normal servers and private servers, I allowed the `owner_id` column under the server table to accept null values. The reason being is there isn't really an owner for private servers and there must be some way to differentiate private servers from normal ones. Thus, I use the same table for both servers and write different SQL queries depending on the server accordingly, allowing more flexibility in retrieving and modifying server data and less complications for the schema. Additionally, each private server will have a fixed, unique name on creation. Duplicate servers will not be created and will instead redirect users to the existing server.

### `Servers`

| Column Name | Data Type | Details                        |
| ----------- |:---------:| ------------------------------:|
| id          | integer   | not null, primary key          |
| name        | string    | not null, indexed, unique      |
| owner_id    | integer   | foreign key                    |
| created_at  | datetime  | not null                       |
| updated_at  | datetime  | not null                       |

```js
let users = [this.props.currentUser.id, this.props.user.id].sort();
const server = Object.assign({}, { "name": `DM ${users[0]} and ${users[1]}` });
```

* **Channels**

Users have the ability to create channels within servers. Channels are essentially chatrooms that accomondate messages. Each channel contains its own set of messages so any time a user navigates to a different channel, that channel's messages will load and overwrite the previous channel's message. Users can hover on a channel and click on the icons to edit and delete it.

Whenever a user is on a channel, it is highlighted in the text channels list. When they navigate to a different channel, that channel will be highlighted instead. The highlight will persist even if the user refreshes their page. This highlighting feature is applicable to channels, private servers, and users lists.

When there is only one channel, users cannot delete it. Servers must have at least one channel. So the only way to remove that channel is to either remove the server entirely, or create another channel.

![gif 3](https://github.com/VoChrisK/Harmony/blob/master/app/assets/images/harmony-gif-3.gif)

* **Messages**

Users are able to interact with one another in real-time. A user can send a message and other users will immediately see the message. Users can also update and delete messages in real-time and only users can modify their own messages. They can interact with one another via channel messages and direct messages.

Users can write, send, and modify messages in a specific channel and others users in the _same channel_ will immediately see the messages. The messages persist even if users navigate away from the channel.

| |   |
| ----------- |:---------:|
| ![chat 1](https://github.com/VoChrisK/Harmony/blob/master/app/assets/images/harmony-chat-1.gif) | ![chat 2](https://github.com/VoChrisK/Harmony/blob/master/app/assets/images/harmony-chat-2.gif)   |

Users can also send direct messages to other users individually. The same principle of real-time interaction applies to direct messages. They can start a direct message session with any user and there are multiple ways to start them:

![gif 4](https://github.com/VoChrisK/Harmony/blob/master/app/assets/images/harmony-gif-4.gif)

Implementing live messaging involves the use of Action Cable, a built-in Rails library for websockets. The general idea for websockets is users subscribe to a channel and that channel will establish the connection from the frontend to the backend. This allows users to receive data from the backend simultaneously, so any time a user sends a message, the contents will be sent to the backend to be created. Once it is created, it will send the newly created message and all subscribed users will receive it. Here is a code snippet of Action Cable in action:

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
