import React from 'react';

class ServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(input) {
        return e => {
            this.setState({ [input]: e.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const server = Object.assign({}, { "name": this.state.name });
        server["owner_id"] = this.props.currentUserId;
        if(!this.isCreate()) {
            server["id"] = this.props.match.params.serverId;
        }

        this.props.processForm(server);
        this.setState({ name: "" });
        this.props.closeModal();
    }

    render() {
        return (
            <div className="server-form">
                {this.isCreate() ? <h1 className="server-form-header">CREATE YOUR SERVER</h1> : <h1 className="server-form-header">EDIT YOUR SERVER</h1> }
                {this.renderDescription()}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="server-input-div">
                        <label htmlFor="server-name" className="server-label form-label">SERVER NAME</label>
                        <input className="server-input" type="text" name="name" id="server-name" placeholder="Enter a server name" autoComplete="off" onChange={this.handleInput("name")} />
                    </div>
                    <div id="preview-icon-container" className="server-icon-container">
                        <h1 className="preview-icon server-icon">{this.state.name ? this.state.name.substring(0,1) : ""}</h1>
                    </div>
                    <div className="server-buttons">
                        {this.isCreate() ? <span className="back-text" onClick={() => this.props.optionsModal()}><strong>←</strong>BACK</span> : null }
                        <input className="server-submit form-submit" type="submit" value={this.isCreate() ? "Create" : "Update"} />
                    </div>
                </form>
            </div>
        );
    }

    isCreate() {
        if(this.props.formType === "create") {
            return true;
        } else {
            return false;
        }
    }

    renderDescription() {
        if(this.isCreate()) {
            return <p className="description">By creating a new server, you will have access to free <strong>text</strong> chat to use amongst your friends.</p>
        } else {
            return <p className="description">Didn't like your server's name? Don't worry, we'd all been there. You'll still have access to free <strong>text</strong> chat though!</p>
        }
    }
};

export default ServerForm;