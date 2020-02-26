import React from 'react';
import chooseColor from '../../util/choose_color';
import { createAffiliation } from './../../util/affiliation_api_util';
import { createDirectMessage } from './../../util/direct_message_api_util';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }

    showDropdown() {
        if(this.props.user.id !== this.props.currentUser.id) {
            document.getElementsByClassName("user-dropdown")[this.props.idx].classList.toggle("is-showing");
        }
    }

    handleMessage(event) {
        this.setState({ body: event.target.value });
    }

    handlePrivateServer(event) {
        event.preventDefault();
        let message = Object.assign({}, this.state);
        message["author_id"] = this.props.currentUser.id;
        this.props.createMessage(message).then(
            newMessage => {
                let users = [this.props.currentUser.username, this.props.user.username].sort();
                const server = Object.assign({}, { "name": `DM between ${users[0]} and ${users[1]}` });
                this.props.createPrivateServer(server).then(
                    newServer => {
                        createDirectMessage(newMessage.message.id, newServer.server.id);
                        createAffiliation(this.props.currentUser.id, newServer.server.id);
                        createAffiliation(this.props.user.id, newServer.server.id).then(
                            () => this.props.history.push(`/servers/@me/${newServer.server.id}`)
                        );
                    }
                );
            }
        )        
    }

    focusTab() {
        document.getElementsByClassName("user-info")[this.props.idx].focus();
    }

    render() {
        const { user } = this.props;

        return (
            <div onClick={this.showDropdown.bind(this)} className="user-info" tabIndex="0">
                <div className="user-tab" onClick={this.focusTab.bind(this)}>
                    <div className={`user-icon icon-container ${chooseColor(user.id)}`}>
                        <img className="discord-icon" src={discordIcon} alt=""/>
                    </div>
                    <i className={`fa fa-circle ${user.status}`}></i>
                    <h1 className="username">{user.username}</h1>
                </div>
    
                <div className="user-dropdown dropdown-menu">
                    <section className="dropdown-section-1">
                        <div className={`big user-icon icon-container ${chooseColor(user.id)}`}>
                            <img className="discord-icon" src={discordIcon} alt="" />
                        </div>
                        <h1 className="username">{user.username}</h1>
                    </section>
    
                    <section className="dropdown-section-2">
                        <button onClick={() => this.props.userProfile(user)} className="view-user-profile">View Profile</button>
                        <form className="direct-message-input" onSubmit={ this.handlePrivateServer.bind(this) }>
                            <input type="text" className="form-input" autoComplete="off" placeholder={`message @${user.username}`} value={this.state.message} onChange={this.handleMessage.bind(this)} />
                        </form>
                    </section>
                </div>
            </div>
        );
    }

};

export default UserIndexItem;