import React from 'react';
import ServerIndex from './../server/server_index';
import ServerShowContainer from './../server/server_show_container';
import Modal from './../modal/modal';
import MainContent from './main_content';
import EditUser from './edit_user';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(Boolean(window.localStorage.getItem("currentUserId"))) {
            this.props.receiveCurrentUserId(window.localStorage.getItem("currentUserId"))
        } 
        else {
            window.localStorage.setItem("currentUserId", this.props.currentUserId);
        }

        
        this.props.requestServers(window.localStorage.getItem("currentUserId"));
    }
    
    render() {
        // if (this.props.servers.length === 0) return null;
        
        return (
            <div className="home-interface">
                <Modal />
                <ServerIndex servers={this.props.servers} optionsModal={this.props.optionsModal} />
                <aside className="channels-and-dms-sidebar">
                    <ServerShowContainer />
                    <EditUser currentUserId={this.props.currentUserId} logout={this.props.logout} />
                </aside>
                <MainContent />
            </div>
        );
    }
}

export default Home;