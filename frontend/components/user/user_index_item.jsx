import React from 'react';
import chooseColor from '../../util/choose_color';
import { createAffiliation } from './../../util/affiliation_api_util';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    showDropdown() {
        document.getElementsByClassName("user-dropdown")[this.props.idx].classList.toggle("is-showing");
    }

    handlePrivateServer(event) {
        event.preventDefault();
        let users = [this.props.currentUser.username, this.props.user.username].sort();
        const server = Object.assign({}, { "name": `DM between ${users[0]} and ${users[1]}` });
        console.log(server);
        this.props.createPrivateServer(server).then(
            newServer => {
                console.log(newServer);
                createAffiliation(this.props.currentUser.id, newServer.server.id);
                createAffiliation(this.props.user.id, newServer.server.id).then(
                    // this.props.history.push(`/servers/@me/${newServer.server.id}`)
                );
            }
        );
    }

    render() {
        const { user } = this.props;

        return (
            <div onClick={this.showDropdown.bind(this)} className="user-info">
                <div className={`user-icon icon-container ${chooseColor(user.id)}`}>
                    <img className="discord-icon" src={discordIcon} alt=""/>
                </div>
                <i className={`fa fa-circle ${user.status}`}></i>
                <h1 className="username">{user.username}</h1>
    
                <div className="user-dropdown dropdown-menu">
                    <section className="dropdown-section-1">
                        <div className={`big user-icon icon-container ${chooseColor(user.id)}`}>
                            <img className="discord-icon" src={discordIcon} alt="" />
                        </div>
                        {/* <h1 className="username">{user.username}</h1> */}
                    </section>
    
                    <section className="dropdown-section-2">
                        <button className="view-user-profile">View Profile</button>
                        <form onSubmit={ this.handlePrivateServer.bind(this) }>
                            <input type="text" className="form-input" autoComplete="off" placeholder={`message @${user.username}`} />
                        </form>
                    </section>
                </div>
            </div>
        );
    }

};

export default UserIndexItem;