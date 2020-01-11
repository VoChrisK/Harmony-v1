import {
    RECEIVE_SERVERS,
    RECEIVE_SERVER,
    REMOVE_SERVER,
    ADD_CHANNEL
} from './../actions/server_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_SERVERS:
            return Object.assign({}, action.servers);
        case RECEIVE_SERVER:
            nextState = Object.assign({}, state);
            nextState[action.server.id] = action.server;
            return nextState;
        case REMOVE_SERVER:
            nextState = Object.assign({}, state);
            delete nextState[action.serverId];
            return nextState;            
        default:
            return state;
    }
};

export default serversReducer;