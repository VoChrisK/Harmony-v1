import {
    RECEIVE_PRIVATE_SERVERS,
    RECEIVE_PRIVATE_SERVER,
    REMOVE_SERVER
} from './../actions/server_actions';
import { LOGOUT_CURRENT_USER } from './../actions/session_actions';

const privateServersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_PRIVATE_SERVERS:
            return Object.assign({}, action.servers);
        case RECEIVE_PRIVATE_SERVER:
            nextState = Object.assign({}, state);
            nextState[action.server.id] = action.server;
            return nextState;
        case REMOVE_SERVER:
            nextState = Object.assign({}, state);
            delete nextState[action.serverId];
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default privateServersReducer;