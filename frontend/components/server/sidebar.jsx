import React from 'react';
import ChannelIndexContainer from '../channel/channel_index_container';
import PrivateServerIndexContainer from '../private_server/private_server_index_container';
import EditUser from '../interface/edit_user';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     if(this.props.match.params.serverId) {
    //         debugger;
    //         this.props.requestServer(this.props.match.params.serverId);
    //     }
    // }

    // componentDidUpdate(preProps) {
    //     if(this.props.server) {
    //         if (this.props.match.params.serverId !== preProps.match.params.serverId) {
    //             this.props.requestServer(this.props.match.params.serverId);
    //         }
    //         else if (!preProps.server || this.props.server.userIds.length !== preProps.server.userIds.length) {
    //             this.props.requestServer(this.props.server.id);
    //         }
    //     }
    // }

    render() {
        const regex = /\/servers\/@me\/?[0-9]*/g;
        const path = this.props.location.pathname;

        if(Boolean(path.match(regex))) {
            return (
                <aside className="channels-and-dms-sidebar">
                    <PrivateServerIndexContainer /> 
                    <EditUser currentUserId={this.props.currentUserId} />
                </aside>
            )
        } else {
            const { server } = this.props;
            if (!server) return null;
            return (
                <aside className="channels-and-dms-sidebar">
                    <ChannelIndexContainer server={server} />
                    <EditUser currentUserId={this.props.currentUserId} />
                </aside>
            )
        }
    }
}

export default Sidebar;