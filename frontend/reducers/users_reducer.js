import { RECEIVE_CURRENT_USER } from './../actions/session_actions';
import { RECEIVE_USERS, REMOVE_USER } from './../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.users);
        case RECEIVE_CURRENT_USER:
            nextState = Object.assign({}, state, {[action.currentUser.id]: action.currentUser });
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case REMOVE_USER:
            nextState = Object.assign({}, state);
            delete nextState[action.userId];
            return nextState;            
        default:
            return state;
    };
};

export default usersReducer;