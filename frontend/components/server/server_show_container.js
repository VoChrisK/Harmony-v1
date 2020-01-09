import { connect } from 'react-redux';
import ServerShow from './server_show';
import { requestServer, deleteServer } from './../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        server: state.entities.servers[ownProps.match.params.serverId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestServer: serverId => dispatch(requestServer(serverId)),
        deleteServer: serverId => dispatch(deleteServer(serverId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));