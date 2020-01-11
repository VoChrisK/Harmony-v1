import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteServer } from './../../actions/server_actions';
import Notification from './notification';
import { closeModal } from './../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        formType: 'server'
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processEntity: serverId => dispatch(deleteServer(serverId)),
        closeModal: () => dispatch(closeModal())
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notification));