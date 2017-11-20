import React from 'react';
import './navigation-bar.css';
import { Link } from 'react-router';

const NavigationBar = React.createClass({

  handleLogout() {
    this.props.logoutUser();
  },

  render() {
    var name = sessionStorage.getItem('name');
    var role = sessionStorage.getItem('role');
    if (role === null) {
      return (
        <nav className="navbar navbar-embossed navbar-fixed-top phuong-navbar" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <Link to="/login" className="btn btn-primary navbar-right log-btn">Login</Link>
          </div>
        </nav>
      );
    }
    else if (role === 'admin') {
      return (
        <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/">Profile</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Curriculum<b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li> < Link to="/marks">Marks</Link></li>
                </ul>
              </li>
              <li><Link to="/users">Users</Link></li>
            </ul>
            <button className="btn btn-danger navbar-right log-btn"
              onClick={this.handleLogout}>Logout, {name}</button>
          </div>
        </nav>
      );
    }

    else if (role === 'student') {
      return (
        <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/">Profile</Link></li>
              <li><Link to="/company/:companyName">Plan List</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Plan<b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/topics">Approve Plan</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/schedule">Plan's Schedule</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Payments<b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/reports">Request Payments</Link></li>
                  <li> < Link to="/marks">List Request Payments</Link></li>
                  <li><Link to="/assigns">Online Banking</Link></li>
                </ul>
              </li>
              <li><Link to="/respondings">Advanced Request</Link></li>
              <li><Link to="/listcv">New Plan Request</Link></li>
            </ul>
            <li className="dropdown navbar-right log-btn">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">{name}<b className="caret"></b></a>
              <span className="dropdown-arrow"></span>
              <ul className="dropdown-menu mai-dropdow">
                <li>
                  <Link to="/login" className="mai-logout" onClick={this.handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>

          </div>
        </nav>
      );
    }

    else if (role === 'teacher_manager') {
      return (
        <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/notifications">Notifications</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Internship <b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/topics">Approve Topic</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Curriculum<b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li> < Link to="/marks">Marks</Link></li>
                  <li><Link to="/assigns">Assigns</Link></li>
                </ul>
              </li>
              <li><Link to="/listcv">List CV</Link></li>
              <li><Link to="/respondings">Forum</Link></li>
              <li><Link to="/status-internships">Internship Status</Link></li>
            </ul>
            <button className="btn btn-danger navbar-right log-btn"
              onClick={this.handleLogout}>Logout, {name}</button>
          </div>
        </nav>
      );
    }

    else if (role === 'teacher_instructor') {
      return (
        <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/notifications">Notifications</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Internship <b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/topics">Register Topic</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Curriculum<b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/reports">Reports</Link></li>
                  <li> < Link to="/marks">Marks</Link></li>
                  <li><Link to="/assigns">Assigns</Link></li>
                </ul>
              </li>
              <li><Link to="/listcv">List CV</Link></li>
              <li><Link to="/respondings">Forum</Link></li>
              <li><Link to="/status-internships">Internship Status</Link></li>
            </ul>
            <button className="btn btn-danger navbar-right log-btn"
              onClick={this.handleLogout}>Logout, {name}</button>
          </div>
        </nav>
      );
    }

    else if (role === 'company_agent') {
      return (
        <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/notifications">Notifications</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Internship <b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/topics">Register Topic</Link></li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-danger navbar-right log-btn"
              onClick={this.handleLogout}>Logout, {name}</button>
          </div>
        </nav>
      );
    }

    else if (role === 'company_instructor') {
      return (
        <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
              <span className="sr-only">Toggle navigation</span>
            </button>
            <Link className="navbar-brand" to="/">Office Management</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse-01">
            <ul className="nav navbar-nav navbar-left">
              <li><Link to="/notifications">Notifications</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Internship <b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/topics">Register Topic</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Curriculum<b className="caret"></b></a>
                <span className="dropdown-arrow"></span>
                <ul className="dropdown-menu">
                  <li><Link to="/assigns">Assigns</Link></li>
                </ul>
              </li>
              <li><Link to="/listcv">List CV</Link></li>
              <li><Link to="/respondings">Forum</Link></li>
            </ul>
            <button className="btn btn-danger navbar-right log-btn"
              onClick={this.handleLogout}>Logout, {name}</button>
          </div>
        </nav>
      );
    }
  }
});

export default NavigationBar;
