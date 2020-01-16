import React from 'react';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestUsers(this.props.match.params.serverId);
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.serverId !== preProps.match.params.serverId || this.props.users.length !== preProps.users.length) {
            this.props.requestUsers(this.props.match.params.serverId);
        }
        else if(this.props.server) {
            if (!preProps.server || this.props.server.userIds.length !== preProps.server.userIds.length) {
                this.props.requestUsers(this.props.match.params.serverId);
            }
        }
    }

    render() {
        if(!this.props.users) return null;

        return (
            <aside className="users-list-container">
                {this.getOnlineUsers().length > 0 ? <h1 className="user-list-header">ONLINE</h1> : null}
                <ul className="online-list">
                    {
                        this.getOnlineUsers().map((user, idx) => <UserIndexItem key={idx} user={user} />)
                    }
                </ul>
                {this.getOfflineUsers().length > 0 ? <h1 className="user-list-header">OFFLINE</h1> : null}
                <ul className="offline-list">
                    {
                        this.getOfflineUsers().map((user, idx) => <UserIndexItem key={idx} user={user} />)
                    }
                </ul>
            </aside>
        )
    }

    getOnlineUsers() {
        const onlineStatuses = ["Online", "Away", "Do not disturb"];
        return this.props.users.filter(user => onlineStatuses.includes(user.status));
    }

    getOfflineUsers() {
        return this.props.users.filter(user => user.status === "Offline");
    }
}

export default UserIndex;