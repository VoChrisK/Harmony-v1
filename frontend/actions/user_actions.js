import * as UserApiUtil from './../util/user_api_util';
import { receiveCurrentUser } from './session_actions';

const receiveUsers = (users) => {
    return ({
        type: "RECEIVE_USERS",
        users
    });
};

export const removeUser = userId => {
    return ({
        type: "REMOVE_USER",
        userId
    });
};

export const requestUsers = serverId => dispatch => {
    return UserApiUtil.fetchUsers(serverId).then(
        users => dispatch(receiveUsers(users))
    );
};

export const requestUsersByIds = userIds => dispatch => {
    return UserApiUtil.fetchUsersByIds(userIds).then(
        users => dispatch(receiveUsers(users))
    )
}

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user).then(
        updatedUser => dispatch(receiveCurrentUser(updatedUser))
    );
};

export const deleteUser = userId => dispatch => {
    return UserApiUtil.deleteUser(userId).then(
        () => dispatch(removeUser(userId))
    );
};

export const RECEIVE_USERS = "RECEIVE_USERS";
export const REMOVE_USER = "REMOVE_USER";