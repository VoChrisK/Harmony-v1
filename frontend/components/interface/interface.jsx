import React from 'react';
import ServerIndex from '../server/server_index';
import SidebarContainer from '../server/sidebar_container';
import Modal from '../modal/modal';
import MainContent from './main_content';
import { checkSession } from './../../util/session_check_util';

class Interface extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestServers(this.props.currentUserId);
        this.props.requestFriends(this.props.currentUserId);

        document.getElementsByClassName("harmony-app")[0].addEventListener("click", () => {
            const dropdown = document.getElementsByClassName("dropdown-menu");
            if (dropdown.length > 0) {
                for(let i = 0; i < dropdown.length; i++) {
                    dropdown[i].classList.remove("is-showing");
                }
            }
        });

        document.getElementsByClassName("harmony-app")[0].addEventListener("click", event => {
            if(document.getElementsByClassName("user-dropdown").length > 0) {
                if (!document.getElementsByClassName("user-dropdown")[0].contains(event.target)) {
                    this.props.clearUserInfo();
                }
            }
        });
    }
    
    render() {
        checkSession(this.props.servers[0], this.props.clearSession);

        return (
            <div className="home-interface">
                <Modal />
                <ServerIndex servers={this.props.servers} optionsModal={this.props.optionsModal} />
                <SidebarContainer />
                <MainContent />
            </div>
        );
    }
}

export default Interface;