import React from 'react';

const UserIndexItem = ({user}) => {
    const colors = ["red", "blue", "green", "yellow", "gray"];
    const randomIndex = Math.floor(Math.random() * (colors.length - 1));

    return (
        <div className="user-info">
            <div className={`user-icon icon-container ${colors[randomIndex]}`}></div>
            <i className={`fa fa-circle ${user.status}`}></i>
            <h1 className="username">{user.username}</h1>
        </div>
    );
};

export default UserIndexItem;