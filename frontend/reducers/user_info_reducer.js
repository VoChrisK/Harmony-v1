import { REQUEST_USER_INFO, CLEAR_USER_INFO } from './../actions/user_actions';

const userInfoReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case REQUEST_USER_INFO:
            return action.userInfo;
        case CLEAR_USER_INFO:
            return {};
        default:
            return {};
    }
}

export default userInfoReducer;