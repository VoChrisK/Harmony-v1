import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { requestServers, requestServer } from '../../actions/server_actions';
import { withRouter } from 'react-router-dom';
import { requestChannels } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.servers[ownProps.match.params.serverId],
        channel: state.entities.channels[ownProps.match.params.channelId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestServers: userId => dispatch(requestServers(userId)),
        requestServer: serverId => dispatch(requestServer(serverId)),
        requestChannels: serverId => dispatch(requestChannels(serverId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));