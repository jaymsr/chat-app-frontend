import React, { Component } from "react";
import "../CSS/ChatPanel.css";
import App from "../App";
import Message from "./Message";

class ChatPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            allMessages: this.props.allMessages,
            isLogout: false
        };
        this.renderMessage = this.renderMessage.bind(this);
    }

    // scrollToBottom = () => {
    //     this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    // }
      
    // componentDidMount() {
    //     this.scrollToBottom();
    // }
      
    // componentDidUpdate() {
    //     this.scrollToBottom();
    // }

    renderMessage() {
        console.log('in')
        return (
            this.state.allMessages['groupA'].map((message, key) => {
                console.log('rendermsg')
                console.log(message)
                console.log('rendermsg end')
                return (
                    <Message message={message} user={this.state.user} />
                )
            })
        )
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
                                {/* <div style={{ float:"left", clear: "both" }}
                                    ref={(el) => { this.messagesEnd = el; }}>
                                </div> */}
                                <form
                                    id="input"
                                    className="input"
                                    onSubmit={e => {
                                        this.props.sendMassage(e)
                                        console.log('e')
                                        var sound = document.getElementById("audio");
                                        sound.play();
                                        var form = document.getElementById("input");
                                        form.reset();
                                    }}
                                >
                                    <input
                                        type="text"
                                        ref="msg"
                                        onChange={e => {
                                            this.props.updateTypeText(e.target.value);
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        value="Submit"
                                        className="btn btn-primary"
                                        id="submitButton"
                                        disabled={!this.props.typeText.trim().length > 0}
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
