import React from 'react';
import { Redirect } from 'react-router-dom';

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("notification");
    }

    handleDelete() {
        let id;
        this.props.formType === "server" ? id = this.props.match.params.serverId : id = this.props.match.params.channelId;
        this.props.processEntity(id);
        this.props.closeModal();
        if(this.props.formType === "server") {
            <Redirect to="/servers/@me" />
        } else {
            <Redirect to="/servers" />
        }
    }

    render() {
        const { formType } = this.props;

        return(
            <div className="notification">
                <h1 className="notification-message">Are you sure you want to <strong>DELETE</strong> this {formType}?</h1>
                <button onClick={this.handleDelete.bind(this)} className="notification-yes">Yes</button>
                <button onClick={() => this.props.closeModal()} className="notification-no">No</button>
            </div>
        ); 
    }
}

export default Notification;