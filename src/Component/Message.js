import React from "react";

const Message = ({ message, user }) => (
    <div>
        <div className={`chat ${user === message.user ? "left" : "left"}`}>
            <div className='profile' >
                <i className='profile' class="fas fa-user-circle fa-2x"></i>
            </div>
            <div className={`content ${user === message.user ? "left" : "left"}`}>
                {message.user} : {message.text}
            </div>
        </div>
        <div className={`time ${user === message.user ? "left" : "left"}`}>
            9:00 Am
        </div>
        <div className={`chat ${user === message.user ? "right" : "left"}`}>
            <div className='profile' >
                <i className='profile' class="fas fa-user-circle fa-2x"></i>
            </div>
            <div className={`content ${user === message.user ? "right" : "left"}`}>
                {message.user} : {message.text}
            </div>
        </div>
        <div className={`time ${user === message.user ? "right" : "left"}`}>
            9:00 Am
        </div>
    </div>
);

export default Message;
