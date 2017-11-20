import React from 'react';
import './login-page.css';
import _ from 'lodash';
import toastr from 'toastr';

const LoginPage = React.createClass({

  checkLogin(username, password) {
    const usersList = this.props.users;
    let foundUser = _.find(usersList, { username });

    if ("undefined" === typeof foundUser) {
      toastr.error("User " + username + " not found!");
    }
    else if ((foundUser.username === username) && (foundUser.password === password)) {
      // toastr.success("username: " + username + " " + "password: " + password);
      let role = foundUser.role;
      let name = foundUser.name;
      // toastr.success(typeof role);
      this.props.logInUser(username, role, name);
    }
    else {
      toastr.error("Wrong password, " + username + " :)");
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    // this.props.logInUser(username, password);
    this.checkLogin(username, password);
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <br/> <br/>
          <h4 className="text-center">Management System</h4>
          <h6 className="text-center">Create new account</h6>
          <form className="login-form" ref="login-form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input ref="username" type="text" className="form-control login-field" placeholder="Enter your name" id="login-name" />
              <label className="login-field-icon fui-user" htmlFor="login-name"></label>
            </div>
            <div className="form-group">
              <input ref="password" type="password" className="form-control login-field" placeholder="Password" id="login-pass" />
              <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
            </div>
            <input type="submit" className="btn btn-primary btn-lg btn-block" href="#" value="Login"></input>
            <input type="submit" hidden ></input>
          </form>
        </div >
      </div >
    );
  }
});

export default LoginPage;
