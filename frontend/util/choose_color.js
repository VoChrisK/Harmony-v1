const chooseColor = (userId) => {
    const colors = ["red", "blue", "green", "yellow", "gray"];
    return colors[userId % (colors.length - 1)];
}

export default chooseColor;