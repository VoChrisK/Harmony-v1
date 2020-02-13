import {
    RECEIVE_PRIVATE_SERVERS
} from './../actions/server_actions';

const privateServersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_PRIVATE_SERVERS:
            return Object.assign({}, action.servers);
        default:
            return state;
    }
}

export default privateServersReducer;