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
            className="btn btn-dark btn-sm"
            onClick={e => {
              this.props.createGroup(e)
            }}
          >
            <i className="fas fa-plus" />
          </button>
        </form>

        <ul className="list-group" style={{ marginTop: "20px" }}>
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
                  {this.props.allGroup[key]}{this.checkJoinStatus(key, ' (MEMBER)', ' (NON-MEMBER)')}
                </li>
                <button
                  type="submit"
                  className={this.checkJoinStatus(key, 'Leave', 'Join')}
                  value={this.checkJoinStatus(key, 'Leave', 'Join') + '_' + key}
                  onClick={e => {
                    var tmp = e.target.value.split("_");
                    if (tmp[0] === "Leave") {
                      this.props.SocketEmit('leave-group', { username: this.props.username, groupId: tmp[1] })
                      this.props.updateCurrentGroup("Not in group.");
                    } else if (tmp[0] === "Join") {
                      this.props.SocketEmit('join-group', { groupId: tmp[1], username: this.props.username })
                    }
                  }}
                >
                  {this.checkJoinStatus(key, 'Leave', 'Join')}
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
