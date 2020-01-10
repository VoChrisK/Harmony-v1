import React from 'react';
import { connect } from 'react-redux';
import { openModal } from './../../actions/modal_actions'; 

const Options = ({createServerModal}) => {
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
                <p>Enter an invite and join your friend's server.</p>
                <div className="join-icon"></div>
                <button>Join a server</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createServerModal: () => dispatch(openModal("createServer"))
    });
}

export default connect(null, mapDispatchToProps)(Options);