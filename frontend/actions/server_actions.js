import * as ServerApiUtil from './../util/server_api_util';

const receiveServers = servers => {
    return ({
        type: "RECEIVE_SERVERS",
        servers
    });
};

const receivePrivateServers = servers => {
    return ({
        type: "RECEIVE_PRIVATE_SERVERS",
        servers
    });
};

const receiveServer = server => {
    return ({
        type: "RECEIVE_SERVER",
        server
    });
};

const receivePrivateServer = server => {
    return ({
        type: "RECEIVE_PRIVATE_SERVER",
        server
    });
}

const removeServer = serverId => {
    return ({
        type: "REMOVE_SERVER",
        serverId
    });
};

export const requestServers = (userId) => dispatch => {
    return ServerApiUtil.fetchServers(userId).then(
        servers => dispatch(receiveServers(servers))
    );
};

export const requestPrivateServers = (userId) => dispatch => {
    return ServerApiUtil.fetchPrivateServers(userId).then(
        servers => dispatch(receivePrivateServers(servers))
    );
};

export const requestServer = serverId => dispatch => {
    return ServerApiUtil.fetchServer(serverId).then(
        server => dispatch(receiveServer(server))
    );
};

export const createServer = server => dispatch => {
    return ServerApiUtil.createServer(server).then(
        newServer => dispatch(receiveServer(newServer))
    )
};

export const createPrivateServer = server => dispatch => {
    return ServerApiUtil.createPrivateServer(server).then(
        newServer => dispatch(receivePrivateServer(newServer))
    );
};

export const updateServer = server => dispatch => {
    return ServerApiUtil.updateServer(server).then(
        updatedServer => dispatch(receiveServer(updatedServer))
    );
};

export const deleteServer = serverId => dispatch => {
    return ServerApiUtil.deleteServer(serverId).then(
        () => dispatch(removeServer(serverId))
    );
};

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_PRIVATE_SERVERS = "RECEIVE_PRIVATE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_PRIVATE_SERVER = "RECEIVE_PRIVATE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER";