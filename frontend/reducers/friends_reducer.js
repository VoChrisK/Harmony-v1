import {
    RECEIVE_FRIENDS,
    RECEIVE_FRIEND,
    REMOVE_FRIEND
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
        case REMOVE_FRIEND:
            nextState = Object.assign({}, state);
            delete nextState[action.friend.id];
            return nextState;            
        default:
            return state;
    }
}

export default friendsReducer;