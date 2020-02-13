export const fetchServers = (userId) => {
    return $.ajax({
        method: "GET",
        url: "api/servers",
        data: {
            user: {
                id: userId
            }
        }
    });
};

export const fetchPrivateServers = (userId) => {
    return $.ajax({
        method: "GET",
        url: "api/servers/private_servers",
        data: {
            user: {
                id: userId
            }
        }
    });
};

export const fetchServer = serverId => {
    return $.ajax({
        method: "GET",
        url: `api/servers/${serverId}`
    });
}

export const createServer = server => {
    return $.ajax({
        method: "POST",
        url: "api/servers",
        data: { server }
    });
}

export const updateServer = server => {
    return $.ajax({
        method: "PATCH",
        url: `api/servers/${server.id}`,
        data: { server }
    });
}

export const deleteServer = serverId => {
    return $.ajax({
        method: "DELETE",
        url: `api/servers/${serverId}`
    });
}