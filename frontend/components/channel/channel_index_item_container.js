import { connect } from 'react-redux';
import ChannelIndexItem from './channel_index_item';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        channel: ownProps.channel
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updateChannelModal: () => dispatch(openModal("updateChannel")),
        deleteChannelModal: () => dispatch(openModal("deleteChannel"))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem));