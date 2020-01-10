import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, REMOVE_CHANNEL } from './../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_CHANNELS:
            return Object.assign({}, action.channels);
        case RECEIVE_CHANNEL:
            nextState = Object.assign({}, state);
            nextState[action.channel.id] = action.channel;
            return nextState;
        case REMOVE_CHANNEL:
            nextState = Object.assign({}, state);
            delete nextState[action.channelId];
            return nextState;
        default:
            return state;
    };
};

export default channelsReducer;