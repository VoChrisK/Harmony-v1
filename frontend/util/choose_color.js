const chooseColor = (userId) => {
    const colors = ["red", "blue", "green", "yellow", "gray"];
    return colors[userId % (colors.length)];
}

export default chooseColor;