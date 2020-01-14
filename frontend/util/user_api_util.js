export const fetchUsers = serverId => {
    return $.ajax({
        method: "GET",
        url: "api/users",
        data: {
            server: {
                id: serverId
            }
        }
    });
};

export const findUser = username => {
    return $.ajax({
        method: "GET",
        url: "api/users/find",
        data: {username: username}
    });
};

export const updateUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: { user }
    });
};

export const deleteUser = userId => {
    return $.ajax({
        method: "DELETE",
        url: `api/users/${userId}`
    });
};