import React from 'react';
import ChannelIndexContainer from '../channel/channel_index_container';
import PrivateServerIndexContainer from '../private_server/private_server_index_container';
import EditUser from '../interface/edit_user';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

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