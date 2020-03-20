import React from 'react';
import PrivateServerIndexItemContainer from './private_server_index_item_container';
import { Link, withRouter } from 'react-router-dom';

class PrivateServerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPrivateServers(this.props.currentUserId).then(
            data => {
                if (data.servers[0] !== "Invalid Credentials") {
                    const userIds = Object.values(data.servers).map(server => server.userIds.filter(id => id !== parseInt(this.props.currentUserId))[0]);
                    userIds.push(this.props.currentUserId);
                    this.props.requestUsersByIds(userIds).then(
                        () => {
                            if (this.props.location.pathname === "/servers/@me") {
                                document.getElementsByClassName("user-info")[0].classList.add("focus");
                            } else {
                                document.getElementById(`user-info-${this.props.match.params.serverId}`).classList.add("focus");
                            }
                        }
                    );
                }
            }
        );
    }

    componentDidUpdate(preProps) {
        if (this.props.match.params.serverId && this.props.match.params.serverId !== preProps.match.params.serverId) {
            if (this.props.servers[0] !== "Invalid Credentials") {
                this.clearFocus();
                document.getElementById(`user-info-${this.props.match.params.serverId}`).classList.add("focus");
            }
        }
    }

    addFocus() {
        this.clearFocus();
        document.getElementsByClassName("user-info")[0].classList.add("focus");
    }

    clearFocus() {
        for (let i = 0; i < document.getElementsByClassName("user-info").length; i++) {
            document.getElementsByClassName("user-info")[i].classList.remove("focus");
        }
    }
    
    render() {
        if(this.props.servers[0] === "Invalid Credentials") {
            this.props.clearSession();
            window.localStorage.clear();
            return null;
        }

        return (
            <aside className="private-servers-container">
                <Link to="/servers/@me" onClick={this.addFocus.bind(this)} className="friends-tab user-info">
                    <i className="fa fa-user-friends"></i>
                    <h2 className="friends-tab-header">Friends</h2>
                </Link>

                <div className="header-container">
                    <h2 className="inline-header">DIRECT MESSAGES</h2>
                    <i onClick={() => this.props.newDirectMessage()} className="fa fa-plus"></i>
                </div>

                <ul className="private-servers-list">
                    {
                        this.props.servers.map((server, idx) => <PrivateServerIndexItemContainer key={idx} server={server} idx={idx} />)
                    }
                </ul>
            </aside>
        )
    }
}

export default withRouter(PrivateServerIndex);