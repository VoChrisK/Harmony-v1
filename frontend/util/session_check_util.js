export const checkSession = (element, callback) => {
    if (element === "Invalid Credentials") {
        callback();
        window.localStorage.clear();
        return null;
    }

    return true;
}