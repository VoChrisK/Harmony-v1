import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from './../../actions/server_actions';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        formType: 'create'
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: server => dispatch(createServer(server))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);