import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <span class="navbar-text">
            Lächeln Chat
          </span>
          <span class="navbar-text">
            Login as "{this.props.username}"
          </span>
          <NavLink to="/">
            <button className="btn btn-danger"
              onClick={e => {
                this.props.updateUsername("");
                this.props.updateCurrentPage("Login");
                this.props.updateCurrentGroup("Not in group.");
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
