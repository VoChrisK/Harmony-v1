import React from 'react';
import { deleteServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { Redirect } from 'react-router-dom';

class DeleteServerNotification extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("notification");
    }

    handleDelete() {
        this.props.deleteServer(this.props.match.params.serverId);
        <Redirect to="/" />
        this.props.closeModal();
    }

    render() {
        return(
            <div className="notification">
                <h1 className="notification-message">Are you sure you want to <strong>DELETE</strong> your server?</h1>
                <button onClick={this.handleDelete.bind(this)} className="notification-yes">Yes</button>
                <button onClick={() => this.props.closeModal()} className="notification-no">No</button>
            </div>
        ); 
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteServer: serverId => dispatch(deleteServer(serverId)),
        closeModal: () => dispatch(closeModal())
    });
}

export default withRouter(connect(null, mapDispatchToProps)(DeleteServerNotification))