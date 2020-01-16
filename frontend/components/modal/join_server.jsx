import React from 'react';
import { createAffiliation } from './../../util/affiliation_api_util';
import { findUser } from './../../util/user_api_util';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { requestServer } from './../../actions/server_actions'

class JoinServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("join-server-modal");
    }

    handleName(e) {
        this.setState({ name: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        findUser(this.state.name).then(
            user => createAffiliation(user.id, this.props.match.params.serverId).then(
                () => this.props.requestServer(this.props.match.params.serverId).then(
                    () => this.props.closeModal()
                )
            )
        );
    }

    render() {
        return (
            <div className="join-server">
                <h1 className="join-server-header">Enter a username and they will join instantly!</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="join-name-div">
                        <label className="name-label form-label" htmlFor="username-input">USERNAME</label>
                        <input type="text" id="username-input" className="form-input" value={this.state.value} onChange={this.handleName.bind(this)}/>
                    </div>
                    <input type="submit" value="Add User" className="join-submit name-submit form-submit"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        requestServer: serverId => dispatch(requestServer(serverId))
    });
};

export default withRouter(connect(null, mapDispatchToProps)(JoinServer));