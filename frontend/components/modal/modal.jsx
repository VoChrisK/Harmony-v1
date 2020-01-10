import React from 'react';
import { closeModal } from './../../actions/modal_actions';
import { connect } from 'react-redux';
import Options from './options';
import CreateServerContainer from './create_server_container';
import UpdateServerContainer from './update_server_container';
import DeleteServerNotification from './delete_server_notification';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;

    let component;
    switch (modal) {
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
            component = <DeleteServerNotification />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-screen" onClick={closeModal}>
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
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);