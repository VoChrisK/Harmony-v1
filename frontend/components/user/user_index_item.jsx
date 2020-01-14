import React from 'react';
import chooseColor from '../../util/choose_color';

const UserIndexItem = ({user}) => {
    return (
        <div className="user-info">
            <div className={`user-icon icon-container ${chooseColor(user.id)}`}></div>
            <i className={`fa fa-circle ${user.status}`}></i>
            <h1 className="username">{user.username}</h1>
        </div>
    );
};

export default UserIndexItem;