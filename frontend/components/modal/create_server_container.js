import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from './../../actions/server_actions';
import { openModal, closeModal } from './../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        servers: state.entities.servers,
        formType: 'create'
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: server => dispatch(createServer(server)),
        optionsModal: () => dispatch(openModal("options")),
        closeModal: () => dispatch(closeModal())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));