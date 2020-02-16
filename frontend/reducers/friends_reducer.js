import {
    RECEIVE_FRIENDS,
    RECEIVE_FRIEND
} from './../actions/friend_actions';

const friendsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_FRIENDS:
            nextState = {};
            action.friends.forEach(friend => nextState[friend.id] = friend);
            return nextState;
        case RECEIVE_FRIEND:
            nextState = Object.assign({}, state);
            nextState[action.friend.id] = action.friend;
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;