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
        this.props.requestMessages(this.props.match.params.channelId);
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
        this.props.createMessage(message, this.props.match.params.channelId);
        //document.getElementById("chat-log").scrollTo(0, document.getElementById("chat-log").scrollHeight);
        this.setState({ body: "" });
    }

    render() {
        if(!this.props.messages) return null;

        return (
            <section className="chat-container">

                <section id="chat-log">
                    {
                        
                        this.props.messages.map((message, idx) => <MessageIndexItem key={idx} message={message} />)
                    }
                </section>

                <form className="message-input-container" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" className="message-input" placeholder="message #channel" value={this.state.body} onChange={this.handleBody.bind(this)} />
                </form>

            </section>
            )
        }
    }
    
export default MessageIndex;