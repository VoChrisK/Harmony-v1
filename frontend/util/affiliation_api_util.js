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