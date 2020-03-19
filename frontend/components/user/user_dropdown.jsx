import React from 'react';
import { createAffiliation } from './../../util/affiliation_api_util';
import { createDirectMessage } from './../../util/direct_message_api_util';
import chooseColor from './../../util/choose_color'; 
import setIcons from '../../util/set_icons';

class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if(Object.keys(this.props.userInfo).length > 0) {
            const dropdown = document.getElementsByClassName("user-dropdown")[0];
            const dropdownBound = this.props.userInfo.y + dropdown.getBoundingClientRect().height;
            dropdown.style.left = this.props.userInfo.alignment === "left" ? (this.props.userInfo.x - 280) + "px" : (this.props.userInfo.x + 60) + "px"
            dropdown.style.top = dropdownBound <= window.innerHeight ? this.props.userInfo.y + "px" : window.innerHeight - dropdown.getBoundingClientRect().height + "px";
            setIcons(this.props.userInfo.user.id);
        }
    }

    handlePrivateServer(event) {
        event.preventDefault();
        let message = { body: document.getElementsByClassName("dm-input")[0].value }
        const { userInfo, currentUser } = this.props;
        message["author_id"] = currentUser.id;
        this.props.createMessage(message).then(
            newMessage => {
                let users = [currentUser.id, userInfo.user.id].sort();
                const server = Object.assign({}, { "name": `DM ${users[0]} and ${users[1]}` });
                this.props.createPrivateServer(server).then(
                    newServer => {
                        createDirectMessage(newMessage.message.id, newServer.server.id);
                        createAffiliation(currentUser.id, newServer.server.id);
                        createAffiliation(userInfo.user.id, newServer.server.id).then(
                            () => this.props.history.push(`/servers/@me/${newServer.server.id}`)
                        );
                    }
                );
            }
        )
    }

    render() {
        if(Object.keys(this.props.userInfo).length === 0) return null;
        const { user } = this.props.userInfo;

        return (
            <div className="user-dropdown">
                <section className="dropdown-section-1">
                    <div className={`big user-icon icon-container ${chooseColor(user.id)}`}>
                        <img className={`huge discord-icon ${user.id}`} src={discordIcon} alt="" />
                    </div>
                    <h1 className="username">{user.username}</h1>
                </section>

                <section className="dropdown-section-2">
                    <button onClick={() => this.props.userProfile(user)} className="view-user-profile">View Profile</button>
                    <form className={`direct-message-input ${this.props.currentUser.id === user.id ? "hide" : ""}`} onSubmit={this.handlePrivateServer.bind(this)}>
                        <input type="text" className="form-input dm-input" autoComplete="off" placeholder={`message @${user.username}`} />
                    </form>
                </section>
            </div>
        )
    }
}

export default UserDropdown;