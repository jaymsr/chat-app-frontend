import React, { Component } from "react";
import "../CSS/ChatPanel.css";
import App from "../App";
import Message from "./Message";

class ChatPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            isLogout: false,
            oldPage: ''
        };
        this.renderMessage = this.renderMessage.bind(this);
        var scrolled = false;
    }

    scrollDown() {
        var objDiv = document.getElementById("chatInput");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    scrollDownWithTimeOut(time) {
        setTimeout(this.scrollDown, time);
    }

    componentDidMount() {
    }

    renderMessage() {
        if (this.state.oldPage!=this.props.currentGroup){
            this.scrollDownWithTimeOut(0)
            this.state.oldPage=this.props.currentGroup
        }
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
                    <div style={{ color: '#DFDFDF', textAlign:"center", fontSize:'30px'}}>Click Join Group to See the Messages...</div>
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

                                    {this.props.currentGroup === "Not in group." ? (
                                        <span class="groupname-text"> {this.props.currentGroup} </span>
                                    ) : (
                                        <span class="groupname-text"> {this.props.allGroup[this.props.currentGroup]} </span>
                                        )}

                                </div>
                                <ul className="chats" id="chatInput">
                                    {this.renderMessage()}
                                </ul>
            
                                <form
                                    id="form"
                                    className="input"
                                    onSubmit={e => {
                                        this.props.sendMassage(e)
                                        var form = document.getElementById("form");
                                        form.reset();
                                        document.getElementById("input").value = '';
                                        this.scrollDownWithTimeOut(200)
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
