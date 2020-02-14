import React from 'react';
import ServerIndex from './../server/server_index';
import ServerShowContainer from './../server/server_show_container';
import Modal from './../modal/modal';
import MainContent from './main_content';
import EditUser from './edit_user';
import { withRouter } from 'react-router-dom';
import PrivateServerIndexContainer from '../private_server/private_server_index_container';

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

        document.getElementsByClassName("harmony-app")[0].addEventListener("click", () => {
            const dropdown = document.getElementsByClassName("dropdown-menu");
            if (dropdown.length > 0) {
                for(let i = 0; i < dropdown.length; i++) {
                    dropdown[i].classList.remove("is-showing");
                }
            }
        });
    }
    
    render() {
        const regex = /\/servers\/@me\/?[0-9]*/g;
        const path = this.props.location.pathname;

        if(!this.props.currentUserId) return null;

        return (
            <div className="home-interface">
                <Modal />
                <ServerIndex servers={this.props.servers} optionsModal={this.props.optionsModal} />
                <aside className="channels-and-dms-sidebar">
                    { Boolean(path.match(regex)) ? <PrivateServerIndexContainer /> : <ServerShowContainer />}
                    <EditUser currentUserId={this.props.currentUserId} />
                </aside>
                <MainContent />
            </div>
        );
    }
}

export default withRouter(Home);