import React from 'react';
import chooseColor from '../../util/choose_color';
import setIcons from './../../util/set_icons';

class MessageIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            body: this.props.message.body
        }
    }

    componentDidMount() {
        setIcons(this.props.message.author_id);
    }

    toggleEdit() {
        this.setState({ edit: !this.state.edit });
    }

    handleBody(e) {
        this.setState({body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = Object.assign({}, this.props.message);
        message["body"] = this.state.body;
        this.props.updateMessage(message).then(
            updatedMessage => {
                App.cable.subscriptions.subscriptions[0].speak({ message: updatedMessage.message, method: 'update' });
                this.setState({ body: message.body, edit: false})
            }
        );
    }

    handleDelete(e) {
        this.props.deleteMessage(this.props.message.id).then(
            () => App.cable.subscriptions.subscriptions[0].speak({ message: this.props.message, method: 'delete' })
        );
    }

    showDropdown() {
        if (parseInt(this.props.currentUserId) === this.props.message.author_id) {
            document.getElementsByClassName("message-dropdown")[this.props.idx].classList.toggle("is-showing");
        }
    }

    showUserInfo(flag) {
        const coordinates = flag ? document.getElementsByClassName("message user-icon")[this.props.idx].getBoundingClientRect() : document.getElementsByClassName("message-author")[this.props.idx].getBoundingClientRect() ;
        const userInfo = {
            user: this.props.users[this.props.message.author_id],
            x: coordinates.x,
            y: coordinates.y,
            alignment: "right"
        };
        this.props.requestUserInfo(userInfo);
    }

    render() {
        const { currentUserId, message } = this.props;
        return (
            <div className="message-container">
                <div onClick={() => this.showUserInfo(true)} className={`message user-icon icon-container ${chooseColor(message.author_id)}`}>
                    <img className={`discord-icon ${message.author_id}`} src={discordIcon} alt="" />
                </div>
                <div className="message-info">
                    <h1 onClick={() => this.showUserInfo(false)} className="message-author">{message.name}</h1>
                        <strong className="message-date">{message.date}</strong>
                        <strong className="message-time"> at {message.time}</strong>
                        {parseInt(currentUserId) === message.author_id ? <i onClick={this.showDropdown.bind(this)} className="fa fa-ellipsis-v"></i> : null}
                       {this.renderInput()}
                </div>
    
                <ul className="message-dropdown dropdown-menu">
                    <li onClick={this.toggleEdit.bind(this)}>Edit</li>
                    <li onClick={this.handleDelete.bind(this)}>Delete</li>
                </ul>
            </div>
        );
    }

    renderInput() {
        if(this.state.edit) {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" className="form-input" value={this.state.body} onChange={this.handleBody.bind(this)}/>
                </form>
            )
        }
        else {
            return <p className="message-body">{this.props.message.body}</p>
        }
    }
};

export default MessageIndexItem;