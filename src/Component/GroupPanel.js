import React, { Component } from "react";
import "../CSS/GroupPanel.css";

class GroupList extends Component {

  checkJoinStatus(value, leave, join) {
    var isJoin = this.props.isJoinGroupList;
    return isJoin.includes(value) ? leave : join;
  }

  componentDidMount() {
    this.props.passRefUpward(this.refs)
  }

  render() {
    console.log(this.props.allGroup)
    return (
      <div className="groupPanel-container">
        <form
          className="form-inline"
          ref="groupForm"
          id="formGropPanel"
        >
          <div className="form-group">
            <label className="addLabel">
              <input
                type="text"
                id="groupItem"
                placeholder="Type Group Name Here"
                ref="groupName"
                className="form-control"
                class="text-center"
              />
            </label>
          </div>
          <button
            type="submit"
            id="addButton"
            className="btn btn-primary btn-sm"
            onClick={e => { 
              this.props.createGroup(e) 
            }}
          >
            <i className="fas fa-plus" />
          </button>
        </form>

        <ul className="list-group">
          {Object.keys(this.props.allGroup).map(function (key, value) {
            return (
              <div key={key}>
                <li
                  className="list-group-item list-group-item-info"
                  id="eachGroupItem"
                  onClick={e => {
                    this.props.updateCurrentGroup(key);
                  }}
                >
                  {this.props.allGroup[key]}{this.checkJoinStatus(key, ' (Joined)', ' (Not-Join)')}
                </li>
                <button
                  type="submit"
                  className={this.checkJoinStatus(key, 'leave', 'join')}
                  value={this.checkJoinStatus(key, 'leave', 'join') + '_' + key}
                  onClick={e => {
                    var tmp = e.target.value.split("_");
                    if (tmp[0] === "leave") {
                      this.props.SocketEmit('leave-group', { username: this.props.username, groupId: tmp[1] })
                    } else if (tmp[0] === "join") {
                      this.props.SocketEmit('join-group', { groupId: tmp[1], username: this.props.username })
                    }
                  }}
                >
                  {this.checkJoinStatus(key, 'leave', 'join')}
                </button>
              </div>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}

export default GroupList;
