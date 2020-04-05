import React, { Component } from "react";
import "../CSS/GroupPanel.css";

class GroupList extends Component {

  componentDidMount() {
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="groupList-container">
          <h1 style={{color: 'white'}}>This is Group Panel</h1>
          <h1 style={{color: 'white'}}>This is Group Panel</h1>
          <h1 style={{color: 'white'}}>This is Group Panel</h1>
          <h1 style={{color: 'white'}}>This is Group Panel</h1>
          <h1 style={{color: 'white'}}>This is Group Panel</h1>
||||||| merged common ancestors
      <div className="groupList-container">
          <h1>This is Group Panel</h1>
          <h1>This is Group Panel</h1>
          <h1>This is Group Panel</h1>
          <h1>This is Group Panel</h1>

=======
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
>>>>>>> ca2fe2a28c7a4205a389052b3f6300b5189de0b2
      </div>
    );
  }
}

export default GroupList;
