import {
    RECEIVE_FRIENDS,
    RECEIVE_FRIEND
} from './../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_FRIENDS:
            return Object.assign({}, action.friends);
        case RECEIVE_FRIEND:
            nextState = Object.assign({}, state);
            nextState[action.friend.id] = action.friend;
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;