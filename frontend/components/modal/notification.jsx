import React from 'react';

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

        if(this.props.formType == "server") {
            this.props.processEntity(id).then(this.props.history.push("/servers/@me"));
        }
        else {
            this.props.processEntity(id).then(
                () => this.props.history.push(`/servers/${this.props.server.id}/${this.props.server.channelIds[0]}`));
        }
        this.props.closeModal();
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