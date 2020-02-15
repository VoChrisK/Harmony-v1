export const fetchFriends = (userId) => {
    return $.ajax({
        method: "GET",
        url: "api/friends",
        data: {
            friend: {
                user_id_1: userId
            }
        }
    });
};

export const createFriend = (user_1, user_2) => {
    return $.ajax({
        method: "POST",
        url: "api/friends",
        data: {
            friend: {
                user_id_1: user_1.id,
                user_id_2: user_2.id
            }
        }
    })
}