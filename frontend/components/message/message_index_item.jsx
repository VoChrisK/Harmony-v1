import React from 'react';
import chooseColor from '../../util/choose_color';

const MessageIndexItem = ({ message }) => {
    return (
        <div className="message-container">
            <div className={`user-icon icon-container ${chooseColor(message.author_id)}`}></div>
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