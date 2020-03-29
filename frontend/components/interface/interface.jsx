import React from 'react';
import ServerIndex from '../server/server_index';
import SidebarContainer from '../server/sidebar_container';
import Modal from '../modal/modal';
import MainContent from './main_content';
import { checkSession } from './../../util/session_check_util';
import LoadSpinner from '../spinner/load_spinner';

class Interface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.requestServers(this.props.currentUserId).then(
                data => {
                    if(data.servers[0] !== "Invalid Credentials") {
                        this.props.requestFriends(this.props.currentUserId);
                        this.setState({ isLoaded: true });
                    }
                }
            );
        }, 1000);

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
        if (!checkSession(this.props.servers[0], this.props.clearSession)) return null;
        if (!this.state.isLoaded) return <LoadSpinner type={"interface"} />;

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