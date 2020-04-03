import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <p>SiaTeemo Chat</p>
          <p>Login as "{this.props.username}" user</p>
          {/* <p>Welcome: {this.props.username}</p> */}
          {/* <p>Group Name: {this.props.currentGroup}</p> */}
          <NavLink to="/">
            <button className="btn btn-danger"
              onClick={e => {
                this.props.updateUsername("");
                this.props.updateCurrentPage("Login");
              }}
            >
              Logout
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
