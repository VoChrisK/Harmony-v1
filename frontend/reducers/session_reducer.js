import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './../actions/session_actions';

const noCurrentUser = {
    id: null
};

const sessionReducer = (state = noCurrentUser, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = Object.assign({}, state);
            nextState["id"] = action.currentUser.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return noCurrentUser;
        default:
            return state;
    }
};

export default sessionReducer;