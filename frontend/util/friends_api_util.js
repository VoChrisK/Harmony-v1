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

export const createFriend = (user1, user2) => {
    return $.ajax({
        method: "POST",
        url: "api/friends",
        data: {
            friend: {
                user_id_1: user1.id,
                user_id_2: user2.id
            }
        }
    })
}

export const removeFriend = (userId1, userId2) => {
    return $.ajax({
        method: "DELETE",
        url: "api/friends/find",
        data: {
            friend: {
                user_id_1: userId1,
                user_id_2: userId2
            }
        }
    })
}