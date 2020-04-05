import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import GroupPanel from "./Component/GroupPanel";
import ChatPanel from "./Component/ChatPanel";
import NavigationBar from "./Component/NavigationBar";
import Login from "./Component/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Login",
      user: "",
      typeText: '',
      allMessages :
      {
        groupA: []
      },
    };
    // Socket Things --------------------------------
    //
    //
    //
    //
    //
    //
    // End Socket Things ----------------------------

    this.SocketEmit = this.SocketEmit.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateTypeText = this.updateTypeText.bind(this);
    this.sendMassage = this.sendMassage.bind(this);

  }

  SocketEmit(event, value) {
    console.log(value)
    console.log('value')
    //this.socket.emit(event,value);
  }

  //--------------------Login-----------------------
  
  updateUsername(value) {
    this.setState({
      user: value
    });
  }
  updateCurrentPage(status) {
    this.setState({
      page: status
    });
  }

  //------------------GroupList---------------------
  //
  //
  //
  //
  //

  //------ north add ja -----//
  //
  //
  //
  //
  //

  //---------------------ChatPanel------------------------
  updateTypeText(value) {
    this.setState({
      typeText: value
    });
  }

  sendMassage(e) {
    const self = this;
    e.preventDefault();
    console.log('type text')
    console.log(this.state.typeText)
    var emitMessage =
    {
      user: this.state.user,
      groupName: this.state.currentGroup,
      text: this.state.typeText,
      timeStamp: Date()
    };

    console.log("message");
    console.log(message);
    //this.socket.emit('sendMessage',message);
    //ReactDOM.findDOMNode(this.state.myRequestedRefsChat.msg).value = "";
    //----------------------------------------------
    var message =
    {
      user: this.state.user,
      text: this.state.typeText,
      timeStamp: Date(),
    }
    console.log(self.state)
    self.state.allMessages['groupA'].push(message)

    //----------------------------------------------


    this.updateTypeText("");
  }



  render() {
    return (
      <div>
        {this.state.page === "Chat" ? (
          <div>
            <NavigationBar
              updateUsername={this.updateUsername}
              user={this.state.user}
              currentGroup={this.state.currentGroup}
              updateCurrentPage={this.updateCurrentPage}
              currentPage={this.state.currentPage}
            />
            <GroupPanel
              // updateCurrentGroup={this.updateCurrentGroup}
              // currentGroup={this.state.currentGroup}
              // username={this.state.username}
              // createGroup={this.createGroup}
              // isJoinGroupList={this.state.isJoinGroupList}
              // groupList={this.state.groupList}
              // onAddItem={this.onAddItem}
              // passRefUpward={this.getRefsFromChild}
              // updateIsJoinGroupList={this.updateIsJoinGroupList}
              // SocketEmit={this.SocketEmit}
            />
            <ChatPanel
              user={this.state.user}
              typeText={this.state.typeText}
              updateTypeText={this.updateTypeText}
              sendMassage={this.sendMassage}
              allMessages={this.state.allMessages}
            />
          </div>
        ) : this.state.page === "Login" ? (
          <div>
            <Login
              updateUsername={this.updateUsername}
              updateCurrentPage={this.updateCurrentPage}
              user={this.state.user}
              page={this.state.page}
              SocketEmit={this.SocketEmit}
            />
          </div>
        ) : null}
      </div >
    );
  }
}

export default App;
