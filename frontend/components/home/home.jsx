import React from 'react';
import ServerIndex from './../server/server_index';
import ServerShowContainer from './../server/server_show_container';
import Modal from './../modal/modal';
import MainContent from './main_content';

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

    logout() {
        this.props.logout();
        window.localStorage.clear();
    }
    
    render() {
        // if (this.props.servers.length === 0) return null;
        
        return (
            <div className="home-interface">
                <Modal />
                <ServerIndex servers={this.props.servers} optionsModal={this.props.optionsModal} />
                <aside className="channels-and-dms-sidebar">
                    <ServerShowContainer />
                </aside>
                <div className="user-options">
                    <button className="logout" onClick={this.logout.bind(this)}>Logout</button>
                </div>
                <MainContent />
            </div>
        );
    }
}

export default Home;