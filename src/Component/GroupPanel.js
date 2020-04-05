import React, { Component } from "react";
import "../CSS/GroupPanel.css";

class GroupList extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="groupPanel-container">
        <form
          className="form-inline"
          // ref="groupForm"
          id="formGropPanel"
        >
          <div className="form-group">
            <label className="addLabel">
              <input
                type="text"
                id="groupItem"
                placeholder="Type New Group Name Here"
                ref="groupName"
                className="form-control"
              />
            </label>
          </div>
          <button
            type="submit"
            id="addButton"
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-plus" />
          </button>
        </form>
      </div>
    );
  }
}

export default GroupList;
