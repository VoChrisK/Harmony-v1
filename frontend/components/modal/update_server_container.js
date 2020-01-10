import { connect } from 'react-redux';
import ServerForm from './server_form';
import { updateServer } from './../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        formType: 'update'
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: server => dispatch(updateServer(server))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));