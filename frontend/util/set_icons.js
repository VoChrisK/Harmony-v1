//this is only temporary - when I get to incorporating image upload, I will use AWS. For now, this'll do. I know that it's terribly inefficient.
const setIcons = (id) => {
    let ids = [2, 3, 4, 5, 6, 7, 8, 9];
    let userIcons = document.getElementsByClassName(`discord-icon ${id}`);
    if(ids.includes(id)) {
        let icons = ["", "", tracerIcon, junkratIcon, meiIcon, winstonIcon, reaperIcon, hanzoIcon, genjiIcon, mccreeIcon];
        for(let i = 0; i < userIcons.length; i++) {
            userIcons[i].setAttribute("src", icons[id]);
            if(userIcons[i].classList.contains("huge")) {
                userIcons[i].style.width = "100px";
                userIcons[i].style.height = "100px";
            } else {
                userIcons[i].style.width = "40px";
                userIcons[i].style.height = "40px";
            }
        }
    } else {
        for (let i = 0; i < userIcons.length; i++) {
            userIcons[i].setAttribute("src", discordIcon);
            if (!userIcons[i].classList.contains("huge")) {
                userIcons[i].style.width = "30px";
                userIcons[i].style.height = "30px";
            }
        }
    }
}

export default setIcons;