import React from 'react';
import MessageIndexItemContainer from './message_index_item_container';
import { createChannelMessage } from './../../util/channel_message_api_util';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            messages: []
        };
    }

    componentDidMount() {
        this.props.requestMessages(this.props.match.params.channelId).then(
            () => {
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


                this.setState({ messages: this.props.messages })
            }
        );

        document.getElementById("chat-log").style.background = `url(${discordChat2}) no-repeat bottom left, url(${discordChat1}) no-repeat bottom right`
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.channelId !== preProps.match.params.channelId) {
            this.props.requestMessages(this.props.match.params.channelId).then(
                () => {
                    this.setState({ messages: this.props.messages })
                }
            );
        }
    }

    handleBody(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let message = Object.assign({}, this.state);
        message["author_id"] = this.props.currentUserId;
        this.props.createMessage(message).then(
            newMessage => {
                createChannelMessage(newMessage.message.id, this.props.match.params.channelId);
                App.cable.subscriptions.subscriptions[0].speak({ message: newMessage.message, method: 'create' });
                this.setState({ body: "" });
            }
        );
    }

    render() {
        const { channel } = this.props;

        return (
            <section className="chat-container">

                <section id="chat-log">
                    {
                        this.state.messages.map((message, idx) => <MessageIndexItemContainer key={idx} message={message} users={this.props.users} idx={idx} />)
                    }
                </section>

                <form className="message-input-container" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" className="message-input" placeholder={`message #${channel ? channel.name : ""}`} value={this.state.body} onChange={this.handleBody.bind(this)} />
                </form>

            </section>
            )
        }
    }
    
export default MessageIndex;