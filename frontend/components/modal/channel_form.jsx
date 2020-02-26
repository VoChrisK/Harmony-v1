import React from 'react';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("channel-modal");
    }

    handleInput(input) {
        return e => {
            this.setState({ [input]: e.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const channel = Object.assign({}, { "name": this.state.name });
        channel["server_id"] = this.props.match.params.serverId;
        if (!this.isCreate()) {
            channel["id"] = this.props.match.params.channelId;
        }

        this.props.processForm(channel).then(
            () => {
                this.setState({ name: "" });
                this.props.clearErrors();
                this.props.closeModal();
            }
        );
    }

    renderError() {
        if (this.props.errors.length === 0) {
            return null;
        } else {
            return <i className="general-error">{" - " + this.props.errors[0]}</i>;
        }
    }

    render() {
        return (
            <div className="channel-form">
                {this.isCreate() ? <h1 className="channel-form-header">CREATE CHANNEL</h1> : <h1 className="channel-form-header">EDIT CHANNEL</h1>}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="channel-input-div">
                        <label htmlFor="channel-input" className={`channel-label form-label ${Boolean(this.renderError()) ? " red-label" : ""}`}>CHANNEL NAME
                            {this.renderError()}
                        </label>
                        <input id="channel-input" className={`form-input ${Boolean(this.renderError()) ? " red-highlight" : ""}`} type="text" name="name" placeholder="Enter a new name" autoComplete="off" onChange={this.handleInput("name")} />
                    </div>
                    <input id="channel-submit" className="form-submit" type="submit" value={this.isCreate() ? "Create" : "Update"} />
                </form>
            </div>
        );
    }

    isCreate() {
        if (this.props.formType === "create") {
            return true;
        } else {
            return false;
        }
    }
}

export default ChannelForm;