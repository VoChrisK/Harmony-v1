import React from 'react';
import { connect } from 'react-redux'
import { createFriend } from '../../actions/friend_actions';
import chooseColor from '../../util/choose_color';
import ServerIndexItem from './../server/server_index_item';
import { closeModal } from '../../actions/modal_actions';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("darker-modal");
    }

    render() {
        const { user } = this.props;

        return (
            <div className="user-profile-container">
                <section className="modal-section-1">
                    <div className={`big user-icon icon-container ${chooseColor(user.id)}`}>
                        <img className="discord-icon" src={discordIcon} alt="" />
                    </div>
                    <h1 className="username">{user.username}</h1>
                    <button className="add-friend">Add Friend</button>
                    <button className="message-button">Message</button>
                </section>

                <section className="modal-section-2">
                    <h1>Mutual Servers</h1>
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
        servers: state.entities.servers
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createFriend: (user1, user2) => dispatch(createFriend(user1, user2)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)