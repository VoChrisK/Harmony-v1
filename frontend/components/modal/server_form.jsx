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
        if(this.props.match) {
            server["id"] = this.props.match.params.serverId;
        }
        this.props.processForm(server);
        this.setState({ name: "" });
    }

    render() {
        return (
            <section className="modal-container">
                {this.isCreate() ? <h1>CREATE YOUR SERVER</h1> : <h1>EDIT YOUR SERVER</h1> }
                {this.renderDescription()}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="server-name" className="form-label">SERVER NAME</label>
                    <input className="server-input" type="text" name="name" id="server-name" onChange={this.handleInput("name")} />
                    <input className="server-submit" type="submit" value={this.isCreate() ? "Create" : "Update"} />
                </form>
                <span>← BACK</span>
            </section>
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
            return <p className="description">Didn't like your server's name? Don't worry, we've all been there. You'll still have access to free <strong>text</strong> chat though!</p>
        }
    }
};

export default ServerForm;