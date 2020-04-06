import React, { Component } from "react";
import "../CSS/ChatPanel.css";
import App from "../App";
import Message from "./Message";

class ChatPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            isLogout: false
        };
        this.renderMessage = this.renderMessage.bind(this);
        var scrolled = false;
    }

    scrollDown() {
        var objDiv = document.getElementById("chatInput");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    scrollDownWithTimeOut() {
        setTimeout(this.scrollDown, 200);
    }

    componentDidMount() {
    }

    renderMessage() {
        if (this.props.allMessages[this.props.currentGroup] && this.props.isJoinGroupList.includes(this.props.currentGroup)) {
            return (
                this.props.allMessages[this.props.currentGroup].map((message, key) => {
                    return (
                        <Message message={message} username={this.state.username} />
                    )
                })
            )
        }
        else {
            return (
                <div>
                    <div style={{ color: '#DFDFDF', marginLeft: '410px', marginTop: '210px' }}>
                        <i class="far fa-sad-tear fa-10x"></i>
                    </div>
                    <div style={{ color: '#DFDFDF', textAlign:"center", fontSize:'30px'}}>Click Join Group to See The Messages...</div>
                </div>
            )
        }
    }

    render() {
        return this.state.isLogout ? (
            <App />
        ) : (
                <div>
                    <div className="ChatRoom-container">
                        <div className="chat-container" id="scrollc">
                            <div className="chatbox-container">
                                <div className="group-name">
                                    <span class="groupname-text">
                                        Group Name
                                    </span>
                                </div>
                                <ul className="chats" id="chatInput">
                                    {this.renderMessage()}
                                </ul>
                                <audio id="audio" src="https://www.soundjay.com/button/sounds/button-10.mp3" autoplay="false" ></audio>
                                <form
                                    id="form"
                                    className="input"
                                    onSubmit={e => {
                                        this.props.sendMassage(e)
                                        var sound = document.getElementById("audio");
                                        sound.play();
                                        var form = document.getElementById("form");
                                        form.reset();
                                        document.getElementById("input").value = '';
                                        this.scrollDownWithTimeOut()
                                    }}
                                >
                                    <input
                                        id="input"
                                        type="text"
                                        ref="msg"
                                        autocomplete="off"
                                        onChange={e => {
                                            this.props.updateTypeText(e.target.value);
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-primary"
                                        id="submitButton"
                                        disabled={!this.props.typeText.trim().length > 0 || !this.props.isJoinGroupList.includes(this.props.currentGroup)}
                                    >
                                        <i className="fa fa-paper-plane" id="plane" aria-hidden="true" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
export default ChatPanel;
