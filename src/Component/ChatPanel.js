import React, { Component } from "react";
import "../CSS/ChatPanel.css";
import App from "../App";

class ChatPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }

    render() {

        return this.state.isLogout ? (
            <App />
        ) : (
                <div>
                    <div className="ChatRoom-container">
                        <div className="chat-container" id="scrollc">
                            <div className="chatbox-container">
                                <h1>this is ChatPanel</h1>
                                <h1>this is ChatPanel</h1>
                                <h1>this is ChatPanel</h1>
                                <h1>this is ChatPanel</h1>

                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
export default ChatPanel;
