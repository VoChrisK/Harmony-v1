import { FILTER_ONLINE } from './../actions/online_actions';

const onlineReducer = (state = "Online", action) => {
    Object.freeze(state);
    switch(action.type) {
        case FILTER_ONLINE:
            return action.status;
        default:
            return state;
    }
}

export default onlineReducer;