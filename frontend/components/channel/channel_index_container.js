import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestChannels } from '../../actions/channel_actions';
import ChannelIndex from './channel_index';

const mapStateToProps = (state, ownProps) => {
    return ({
        channels: Object.values(state.entities.channels),
        server: ownProps.server
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestChannels: serverId => dispatch(requestChannels(serverId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndex));