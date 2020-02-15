import React from 'react';
import ServerIndex from '../server/server_index';
import SidebarContainer from '../server/sidebar_container';
import Modal from '../modal/modal';
import MainContent from './main_content';

class Interface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
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
        if(!this.props.currentUserId) return null;
        console.log(this.state.isLoaded);
        return (
            <div className="home-interface">
                <Modal />
                <ServerIndex servers={this.props.servers} optionsModal={this.props.optionsModal} />
                <SidebarContainer onLoad={event => this.setState({ isLoaded: true })} />
                {this.state.isLoaded ? <MainContent /> : null }
            </div>
        );
    }
}

export default Interface;