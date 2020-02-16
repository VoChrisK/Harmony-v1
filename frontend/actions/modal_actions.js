export const openModal = (modal, user) => {
    return({
        type: "OPEN_MODAL",
        modal,
        user
    });
};

export const closeModal = () => {
    return ({
        type: "CLOSE_MODAL"
    });
};

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";