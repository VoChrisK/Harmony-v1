import React from 'react';
import { updateUser } from './../../actions/user_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class EditName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.currentUser.username
        };
    }

    componentDidMount() {
        document.getElementsByClassName("modal-container")[0].classList.add("edit-name-modal");
    }

    handleName(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.props.currentUser);
        user["username"] = this.state.name;
        this.props.updateUser(user).then(
            () => this.props.closeModal()
        );
    }

    render() {
        return (
            <form className="edit-name" onSubmit={this.handleSubmit.bind(this)}>
                <div className="edit-name-div">
                    <label className="name-label form-label" htmlFor="edit-name-input">EDIT NAME</label>
                    <input type="text" id="edit-name-input" className="form-input" autoComplete="off" value={this.state.name} onChange={this.handleName.bind(this)} />
                </div>
                <input type="submit" value="Update" className="name-submit form-submit"/>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: user => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditName);