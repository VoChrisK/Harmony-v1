import { connect } from 'react-redux';
import UserIndexItem from './user_index_item';
import { withRouter } from 'react-router-dom';
import { requestUserInfo } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestUserInfo: user => dispatch(requestUserInfo(user))
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndexItem));