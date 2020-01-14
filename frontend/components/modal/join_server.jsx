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

    handleName(e) {
        this.setState({ name: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        findUser(this.state.name).then(
            user => createAffiliation(user.id, this.props.match.params.serverId).then(
                () => this.props.requestServer(this.props.match.params.serverId)
            )
        );
        this.props.closeModal();
    }

    render() {
        return (
            <div className="join-server">
                <h1>Enter a username and they will join instantly!</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="username-input">USERNAME</label>
                        <input type="text" id="username-input" value={this.state.value} onChange={this.handleName.bind(this)}/>
                    </div>
                    <input type="submit" value="Add User"/>
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