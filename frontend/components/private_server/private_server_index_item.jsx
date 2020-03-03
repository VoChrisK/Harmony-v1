import React from 'react';
import chooseColor from './../../util/choose_color';
import { Link, withRouter, Redirect } from 'react-router-dom';

class PrivateServerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    addFocus() {
        this.clearFocus();
        document.getElementsByClassName("user-info")[this.props.idx].classList.add("focus");
    }

    clearFocus() {
        for (let i = 0; i < document.getElementsByClassName("user-info").length; i++) {
            document.getElementsByClassName("user-info")[i].classList.remove("focus");
        }
    }
    
    handleDelete() {
        this.props.deleteServer(this.props.server.id).then(
            () => this.props.history.push("/servers/@me")
        )
    }

    render() {
        const otherUserId = this.props.server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0];
        if(!this.props.users[otherUserId]) return null;

        return (
            <Link to={`/servers/@me/${this.props.server.id}`} onClick={this.addFocus.bind(this)} className="user-info" id={`user-info-${this.props.server.id}`}>
                <div className={`user-icon icon-container ${chooseColor(otherUserId)}`}>
                    <img className="discord-icon" src={discordIcon} alt="" />
                </div>
                <i className={`fa fa-circle ${this.props.users[otherUserId].status}`}></i>
                <h1 className="username">{this.props.users[otherUserId].username}</h1>
                <i onClick={this.handleDelete.bind(this)} className="far fa-times-circle"></i>
            </Link>
        )
    }
}

export default withRouter(PrivateServerIndexItem);