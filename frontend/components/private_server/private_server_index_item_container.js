import { connect } from 'react-redux';
import PrivateServerIndexItem from './private_server_index_item';

const mapStateToProps = (state) => {
    return ({
        currentUserId: state.session.id,
        users: state.entities.users
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateServerIndexItem);