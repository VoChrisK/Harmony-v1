import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteChannel } from './../../actions/channel_actions';
import Notification from './notification';
import { closeModal } from './../../actions/modal_actions';

const mapStateToProps = (state) => {
    return ({
        formType: 'channel'
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        processEntity: channelId => dispatch(deleteChannel(channelId)),
        closeModal: () => dispatch(closeModal())
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notification));