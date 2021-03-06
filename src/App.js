import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import GroupPanel from "./Component/GroupPanel";
import ChatPanel from "./Component/ChatPanel";
import NavigationBar from "./Component/NavigationBar";
import Login from "./Component/Login";
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Login",
      username: "",
      typeText: '',
      currentGroup: "Not in group.",
      isJoinGroupList: [], // [true, false, true]
      allMessages: {},
      allGroup: [],
      myRequestedRefs: 'empty',
    };

    // Socket Things --------------------------------

    this.socket = openSocket('http://localhost:8000');
    console.log('open socket...')
    const me = this;

    this.socket.on('all-group', function (data) {
      me.setState({ allGroup: data })
      console.log('all group...')
      console.log(me.state)
    })

    this.socket.on('join-group', function (data) {
      me.setState({ isJoinGroupList: data })
      console.log('join group...')
      console.log(me.state)
    })

    this.socket.on('all-chat', function (data) {
      me.setState({ allMessages: data })
      console.log('all chat...')
      console.log(me.state)
    })

    // End Socket Things ----------------------------

    this.SocketEmit = this.SocketEmit.bind(this);

    this.updateUsername = this.updateUsername.bind(this);
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateCurrentGroup = this.updateCurrentGroup.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.updateTypeText = this.updateTypeText.bind(this);
    this.sendMassage = this.sendMassage.bind(this);
    this.getRefsFromChild = this.getRefsFromChild.bind(this);
    this.updateIsJoinGroupList = this.updateIsJoinGroupList.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  SocketEmit(event, value) {
    this.socket.emit(event, value);
  }

  //--------------------Login-----------------------

  updateUsername(value) {
    this.setState({
      username: value
    });
  }
  updateCurrentPage(status) {
    this.setState({
      page: status
    });
  }

  //------------------GroupList---------------------

  updateCurrentGroup(value) {
    this.setState({ currentGroup: value }, () => {
      console.log('click group')
      console.log(this.state.currentGroup)
    })
  }
  onAddItem() {
    this.socket.emit('new-group', { username: this.state.username, groupName: this.state.myRequestedRefs.groupName.value })
    this.state.myRequestedRefs.groupForm.reset();
  }
  createGroup(e) {
    e.preventDefault();
    var group = this.state.myRequestedRefs.groupName.value;
    if (typeof group === "string" && group.length > 0) {
      this.onAddItem();
    }
  }
  getRefsFromChild(childRef) {
    this.setState({
      myRequestedRefs: childRef
    });
  }

  //------ north add ja -----//

  updateIsJoinGroupList(newList) {
    this.setState({ isJoinGroupList: newList });
  }

  //---------------------ChatPanel------------------------

  updateTypeText(value) {
    this.setState({
      typeText: value
    });
  }

  sendMassage(e) {
    const self = this;
    e.preventDefault();
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "/" + (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes()

    var emitMessage =
    {
      username: this.state.username,
      groupId: this.state.currentGroup,
      text: this.state.typeText,
      timestamp: formatted_date
    };

    console.log("message");
    console.log(emitMessage);
    this.socket.emit('send-message', emitMessage);
    
    //ReactDOM.findDOMNode(this.state.myRequestedRefsChat.msg).value = "";
    //----------------------------------------------
    // var message =
    // {
    //   username: this.state.username,
    //   text: this.state.typeText,
    //   timeStamp: Date(),
    // }
    // self.state.allMessages['5e89c8271c9d440000f78e42'].push(message)

    //----------------------------------------------


    this.updateTypeText("");
  }


  render() {
    // console.log(this.state.myRequestedRefs.groupName)
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
              updateCurrentGroup={this.updateCurrentGroup}
            />
            <GroupPanel
              updateCurrentGroup={this.updateCurrentGroup}
              currentGroup={this.state.currentGroup}
              username={this.state.username}
              createGroup={this.createGroup}
              isJoinGroupList={this.state.isJoinGroupList}
              allGroup={this.state.allGroup}
              onAddItem={this.onAddItem}
              passRefUpward={this.getRefsFromChild}
              updateIsJoinGroupList={this.updateIsJoinGroupList}
              SocketEmit={this.SocketEmit}
            />
            <ChatPanel
              username={this.state.username}
              typeText={this.state.typeText}
              updateTypeText={this.updateTypeText}
              sendMassage={this.sendMassage}
              allMessages={this.state.allMessages}
              currentGroup={this.state.currentGroup}
              isJoinGroupList={this.state.isJoinGroupList}
              allGroup={this.state.allGroup}
            />
          </div>
        ) : this.state.page === "Login" ? (
          <div>
            <Login
              updateUsername={this.updateUsername}
              updateCurrentPage={this.updateCurrentPage}
              username={this.state.username}
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
