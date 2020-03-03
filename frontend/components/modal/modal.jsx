import React from 'react';
import { closeModal } from './../../actions/modal_actions';
import { connect } from 'react-redux';
import Options from './options';
import CreateServerContainer from './create_server_container';
import UpdateServerContainer from './update_server_container';
import CreateChannelContainer from './create_channel_container';
import UpdateChannelContainer from './update_channel_container';
import DeleteServerContainer from './delete_server_container';
import DeleteChannelContainer from './delete_channel_container';
import JoinServer from './join_server';
import AddFriendContainer from './add_friend_container';
import EditNameContainer from './edit_name_container';
import UserProfile from './user_profile';
import NewDirectMessage from './new_direct_message';
import { clearErrors } from '../../actions/error_actions';

const Modal = ({ modal, closeModal, clearErrors }) => {
    if (!modal) return null;

    let component;
    switch (modal.action) {
        case 'options':
            component = <Options />;
            break;
        case 'createServer':
            component = <CreateServerContainer />
            break;
        case 'updateServer':
            component = <UpdateServerContainer />
            break;
        case 'deleteServer':
            component = <DeleteServerContainer />
            break;
        case 'createChannel':
            component = <CreateChannelContainer />
            break;
        case 'updateChannel':
            component = <UpdateChannelContainer />
            break;
        case 'deleteChannel':
            component = <DeleteChannelContainer />
            break;
        case 'joinServer':
            component = <JoinServer />
            break;
        case 'editName':
            component = <EditNameContainer />
            break;
        case 'addFriend':
            component = <AddFriendContainer />
            break;
        case 'userProfile':
            component = <UserProfile user={modal.user} />
            break;
        case 'newDM':
            component = < NewDirectMessage />;
            break;
        default:
            return null;
    }

    const handleClose = () => {
        clearErrors();
        closeModal();
    }

    return (
        <div className="modal-screen" onClick={handleClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);