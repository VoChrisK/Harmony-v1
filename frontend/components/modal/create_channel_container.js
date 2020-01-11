import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        formType: 'create'
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processForm: channel => dispatch(createChannel(channel)),
        closeModal: () => dispatch(closeModal())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));