import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };
    }

    componentDidMount() {
        if (document.getElementById("chat-log").childElementCount === 0 ) {
            this.props.requestMessages(this.props.match.params.channelId).then(
                () => document.getElementById("chat-log").lastChild.scrollIntoView()
            );
        }
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.channelId !== preProps.match.params.channelId) {
            this.clearLiveMessages();
            this.props.requestMessages(this.props.match.params.channelId);
        }
    }

    clearLiveMessages() {
        let oldMessages = document.getElementsByClassName("live-message-container");
        while(oldMessages.length > 0) {
            oldMessages[0].parentNode.removeChild(oldMessages[0]);
        }
    }

    handleBody(e) {
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let message = Object.assign({}, this.state);
        message["author_id"] = this.props.currentUserId;
        this.props.createMessage(message, this.props.match.params.channelId).then(
            () => document.getElementById("chat-log").lastChild.scrollIntoView()
        );
        this.setState({ body: "" });
    }

    render() {
        if(!this.props.messages) return null;
        const { channel } = this.props

        return (
            <section className="chat-container">

                <section id="chat-log">
                    {
                        
                        this.props.messages.map((message, idx) => <MessageIndexItem key={idx} message={message} users={this.props.users} />)
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