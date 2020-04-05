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
  onAddItem() {
    this.socket.emit('new-group',{username:this.state.user, groupname:this.state.myRequestedRefs.groupName.value})
    this.state.myRequestedRefs.groupForm.reset();
  }
  createGroup(e) {
    e.preventDefault();
    var group = this.state.myRequestedRefs.groupName.value;
    if (typeof group === "string" && group.length > 0) {
      this.onAddItem();
    }
  }

  //------ north add ja -----//
  //
  //
  //
  //
  //

  //---------------------ChatPanel------------------------
  //
  //
  //
  //



  render() {
    return (
      <div>
        {this.state.page === "Chat" ? (
          <div>
            <NavigationBar
              updateUsername={this.updateUsername}
              username={this.state.username}
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
              username={this.state.username}
              currentGroup={this.state.currentGroup}
              isJoinGroupList={this.state.isJoinGroupList}
              groupList={this.state.groupList}
              allChats={this.state.allChats}
              typeText={this.state.typeText}
              submitMessage={this.submitMessage}
              userInput={this.userInput}
              passRefUpwardChat={this.getRefsFromChildChat}
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
