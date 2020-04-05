import React from "react";

const Message = ({ message, username }) => (
    <div>
        <div className={`chat ${username === message.username ? "right" : "left"}`}>
            <div className='profile' >
                <i className='profile' class="fas fa-user-circle fa-2x"></i>
            </div>
            <div className={`content ${username === message.username ? "right" : "left"}`}>
                {message.username} : {message.text}
            </div>
        </div>
        <div className={`time ${username === message.username ? "right" : "left"}`}>
            9:00 Am
        </div>
    </div>
);

export default Message;
