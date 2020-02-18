import React from 'react';
import { connect } from 'react-redux'
import { createFriend } from '../../actions/friend_actions';
import chooseColor from '../../util/choose_color';
import ServerIndexItem from './../server/server_index_item';
import { closeModal } from '../../actions/modal_actions';
import { createAffiliation } from './../../util/affiliation_api_util';
import { createPrivateServer } from './../../actions/server_actions';
import { withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("darker-modal");
    }

    handlePrivateServer(event) {
        event.preventDefault();
        let users = [this.props.currentUser.username, this.props.user.username].sort();
        const server = Object.assign({}, { "name": `DM between ${users[0]} and ${users[1]}` });
        this.props.createPrivateServer(server).then(
            newServer => {
                createAffiliation(this.props.currentUser.id, newServer.server.id);
                createAffiliation(this.props.user.id, newServer.server.id).then(
                    () => {
                        this.props.closeModal();
                        this.props.history.push(`/servers/@me/${newServer.server.id}`);
                    }
                );
            }
        );
    }

    render() {
        const { user } = this.props;

        return (
            <div className="user-profile-container">
                <section className="modal-section-1">
                    <div className="user-container">
                        <div className={`big user-icon icon-container ${chooseColor(user.id)}`}>
                            <img className="discord-icon" src={discordIcon} alt="" />
                        </div>
                        <h1 className="username">{user.username}</h1>
                    </div>
                    
                    <div className="buttons-group">
                        <button className={this.props.friends[user.id] ? "dropdown-menu add-friend" : "add-friend"} onClick={event => this.props.createFriend(this.props.currentUser, user)}>Add Friend</button>
                        <button onClick={this.handlePrivateServer.bind(this)} className="message-button">Message</button>
                    </div>
                </section>

                <section className="modal-section-2">
                    <h1 className="server-header">Mutual Servers</h1>
                    <ul className="mutual-servers">
                        {
                            user.serverIds.map((id, idx) => this.renderServerIcon(id, idx))
                        }
                    </ul>
                </section>
            </div>
        );
    }

    renderServerIcon(id, idx) {
        const server = this.props.servers[id];
        if(server) {
            return <ServerIndexItem key={idx} server={server} closeModal={this.props.closeModal} />
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        servers: state.entities.servers,
        friends: state.entities.friends,
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createFriend: (user1, user2) => dispatch(createFriend(user1, user2)),
        createPrivateServer: server => dispatch(createPrivateServer(server)),
        closeModal: () => dispatch(closeModal())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile));