export const createAffiliation = (userId, serverId) => {
    return $.ajax({
        method: "POST",
        url: "api/affiliations",
        data: {
            affiliation: {
                user_id: userId,
                server_id: serverId
            }
        }
    });
};

export const deleteAffiliation = (userId, serverId) => {
    return $.ajax({
        method: "DELETE",
        url: "api/affiliations/find",
        data: {
            user_id: userId,
            server_id: serverId
        }
    });
};