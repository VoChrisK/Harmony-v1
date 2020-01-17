import React from 'react';
import { connect } from 'react-redux';
import { openModal } from './../../actions/modal_actions'; 

class Options extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("create-icon")[0].style.background = `url(${createIcon}) no-repeat`;
        document.getElementsByClassName("create-icon")[0].style.backgroundSize = "contain";
        document.getElementsByClassName("create-icon")[0].style.backgroundPosition = "50%";
        document.getElementsByClassName("join-icon")[0].style.background = `url(${joinIcon}) no-repeat`;
        document.getElementsByClassName("join-icon")[0].style.backgroundSize = "contain";
        document.getElementsByClassName("join-icon")[0].style.backgroundPosition = "50%";
    }

    render() {
        const { createServerModal, JoinServerModal } = this.props;

        return(
        <div className="options-modal">
            <h1>OH, ANOTHER SERVER HUH?</h1>
            <div className="create-option options">
                <h1>CREATE</h1>
                <p>Create a new server and invite your friends. It's free!</p>
                <div className="create-icon"></div>
                <button onClick={() => createServerModal()}>Create a server</button>
            </div>
            <div className="join-option options">
                <h1>JOIN</h1>
                <p>Enter a username and have your friend join your server.</p>
                <div className="join-icon"></div>
                <button onClick={() => JoinServerModal()}>Invite a friend</button>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createServerModal: () => dispatch(openModal("createServer")),
        JoinServerModal: () => dispatch(openModal("joinServer"))
    });
}

export default connect(null, mapDispatchToProps)(Options);