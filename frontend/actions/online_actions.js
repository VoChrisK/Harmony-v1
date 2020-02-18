export const filterOnline = (status) => {
    return ({
        type: "FILTER_ONLINE",
        status
    });
};

export const FILTER_ONLINE = "FILTER_ONLINE";