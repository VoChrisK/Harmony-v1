import React from 'react';

class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
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
                let users = [this.props.currentUser.id, this.props.user.id].sort();
                const server = Object.assign({}, { "name": `DM ${users[0]} and ${users[1]}` });
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


    render() {
        return (
            <div className="user-dropdown dropdown-menu">
                <section className="dropdown-section-1">
                    <div className={`big user-icon icon-container ${chooseColor(user.id)}`}>
                        <img className={`huge discord-icon ${this.props.user.id}`} src={discordIcon} alt="" />
                    </div>
                    <h1 className="username">{user.username}</h1>
                </section>

                <section className="dropdown-section-2">
                    <button onClick={() => this.props.userProfile(user)} className="view-user-profile">View Profile</button>
                    <form className="direct-message-input" onSubmit={this.handlePrivateServer.bind(this)}>
                        <input type="text" className="form-input" autoComplete="off" placeholder={`message @${user.username}`} value={this.state.message} onChange={this.handleMessage.bind(this)} />
                    </form>
                </section>
            </div>
        )
    }
}

export default UserDropdown;