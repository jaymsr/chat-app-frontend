import React, { Component } from "react";
import "../CSS/Login.css";
import { NavLink } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(e) {
    if (this.props.username.trim().length > 0)
      this.props.updateCurrentPage("Chat");
    else return false;
  }
  /** ****Notes***** If account name exist and no-one login with that account. -- Get stage from --
   * If account name not exist in DB --Create new isJoinGroupList with all element false. --
   * If account name exist but someone login with that name -- Reject new login with that name. --
   */
  render() {
    return (
      <div className="Login-Page">
        <div className="Field-Container">
          <h1 className="enterText">Enter Your Name</h1>
          <br />
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name here ..."
              id="nameField"
              onChange={e => {
                this.props.updateUsername(e.target.value);
              }}
            />
          </form>

          {this.props.user.trim().length > 0 ? (
            <br />
          ) : (
              <pre className="blankAlert"> Please fill out this field.</pre>
            )}

          <div>
            <NavLink to="/ChatRoom">
              <button
                disabled={!this.props.user.trim().length > 0}
                className="btn btn-primary"
                type="submit"
                onClick={e => {
                  this.props.updateCurrentPage("Chat");
                  console.log(this.props.user)
                  this.props.SocketEmit('enter', this.props.user)
                }}
              >
                Enter
              </button>
            </NavLink>
          </div>

        </div>
      </div>
    );
  }
}
export default Login;
