import {
    RECEIVE_PRIVATE_SERVERS,
    RECEIVE_PRIVATE_SERVER
} from './../actions/server_actions';

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
        default:
            return state;
    }
}

export default privateServersReducer;