import React from 'react';
import MessageIndexItemContainer from './message_index_item_container';
import { createChannelMessage } from './../../util/channel_message_api_util';
import { createDirectMessage } from './../../util/direct_message_api_util';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            messages: []
        };
    }

    componentDidMount() {
        if(this.props.inputType === "server") {
            document.getElementsByClassName("chat-container")[0].classList.add("expand");
        } else {
            document.getElementsByClassName("chat-container")[0].classList.remove("expand");
        }

        this.props.requestMessages(this.props.inputType, this.props.input.id).then(
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
        if(this.props.input.id !== preProps.input.id) {
            this.props.requestMessages(this.props.inputType, this.props.input.id).then(
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
                if(this.props.inputType === "channel") {
                    createChannelMessage(newMessage.message.id, this.props.input.id);
                } else {
                    createDirectMessage(newMessage.message.id, this.props.input.id);
                }
                App.cable.subscriptions.subscriptions[0].speak({ message: newMessage.message, method: 'create' });
                this.setState({ body: "" });
            }
        );
    }

    render() {
        const { input, inputType } = this.props;

        return (
            <section className="chat-container">

                <section id="chat-log">
                    {
                        this.state.messages.map((message, idx) => <MessageIndexItemContainer key={idx} message={message} users={this.props.users} idx={idx} />)
                    }
                </section>

                <form className="message-input-container" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" className="message-input" placeholder={`message ${inputType === "channel" ? "#" + input.name : this.renderUsername() }`} value={this.state.body} onChange={this.handleBody.bind(this)} />
                </form>

            </section>
        )
    }

    renderUsername() {
        const index = this.props.input.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        const otherUser = this.props.users[index];
        return "@" + otherUser.username;
    }
}
    
export default MessageIndex;