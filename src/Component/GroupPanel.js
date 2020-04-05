import React, { Component } from "react";
import "../CSS/GroupPanel.css";

class GroupList extends Component {

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
            className="btn btn-primary btn-sm"
          >
            <i className="fas fa-plus" />
          </button>
        </form>
        
        <ul className="list-group">

        </ul>
      </div>
    );
  }
}

export default GroupList;
