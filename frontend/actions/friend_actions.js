import * as FriendApiUtil from './../util/friends_api_util';

const receiveFriends = (friends) => {
    return ({
        type: "RECEIVE_FRIENDS",
        friends
    })
}

const receiveFriend = (friend) => {
    return ({
        type: "RECEIVE_FRIEND",
        friend
    })
}

export const requestFriends = (userId) => dispatch => {
    return FriendApiUtil.fetchFriends(userId).then(
        friends => dispatch(receiveFriends(friends))
    );
};

export const createFriend = (user1, user2) => dispatch => {
    return FriendApiUtil.createFriend(user1, user2).then(
        friend => dispatch(receiveFriend(friend))
    )
};

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";