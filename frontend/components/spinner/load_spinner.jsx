import React from 'react';

const LoadSpinner = ({ type }) => {
    return (
        <div className={`${type === "interface" ? "interface" : ""} spinner`}>
            <img className={`${type === "message" ? "message" : ""} spinner-gif`} src={type === "interface" ? interfaceSpinner : messageSpinner } />
        </div>
    );
};

export default LoadSpinner;