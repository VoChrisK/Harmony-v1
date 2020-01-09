import { connect } from 'react-redux';
import Home from './home';
import { requestServers, requestServer, createServer } from './../../actions/server_actions';

const mapStateToProps = (state) => {
    return ({
        servers: Object.values(state.entities.servers),
        currentUserId: state.session.id 
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        requestServers: () => dispatch(requestServers()),
        requestServer: serverId => dispatch(requestServer(serverId)),
        createServer: server => dispatch(createServer(server))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);