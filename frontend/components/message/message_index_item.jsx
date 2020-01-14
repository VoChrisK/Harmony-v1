import React from 'react';

const MessageIndexItem = ({ users, message }) => {
    if(!users) return null;
    //{users[message.author_id - 1].username}

    return (
        <div className="message-container">
            <div className="message-info">
                <h1 className="message-author">{message.name}</h1>
                <strong className="message-date">{message.date}</strong>
                <strong className="message-time"> at {message.time}</strong>
                <i className="fa fa-ellipsis-v"></i>
                <p className="message-body">{message.body}</p>
            </div>
        </div>
    );
};

export default MessageIndexItem;