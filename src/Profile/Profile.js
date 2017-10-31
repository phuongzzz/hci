import React from 'react';
import './profile.css';
import ava from "./avatar.png"

class Profile extends React.Component {
  render() {
    return (
      <div className="col-md-10 col-md-offset-1">
        <div className="row avatar">
          <img className="img-circle avatar_img" src={ava} alt=""/>
          <p id="full_name">Nguyen Cuong</p>
          <p id="username">phucuong0201</p>
        </div>
        <br/>
        <div className="col-md-6 cuong-left-panel">
          <p className="panel-label">Basic Information</p>
          <div className="panel">
            <div className="panel-body">
              <ul className="list-unstyled task-list">
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Full Name</span></div>
                    <div className="col-md-4"><span>Nguyen Phu Cuong</span></div>
                  </div>
                </li>
                <hr/>
                <div className="row">
                  <div className="col-md-6 cuong-head"><span>Email Address</span></div>
                  <div className="col-md-4"><span>phucuong0201@gmail.com</span></div>
                </div>
                <hr/>
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Student ID</span></div>
                    <div className="col-md-4"><span><a href="">Add student ID</a></span></div>
                  </div>
                </li>
                <hr/>
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Password</span></div>
                    <div className="col-md-4"><span>Change Password</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <p className="panel-label">Additional Information</p>
          <div className="panel">
            <div className="panel-body">
              <ul className="list-unstyled task-list">
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Gender</span></div>
                    <div className="col-md-4"><span><a href="">Add Gender</a></span></div>
                  </div>
                </li>
                <hr/>
                <div className="row">
                  <div className="col-md-6 cuong-head"><span>Other Name/Nicknames</span></div>
                  <div className="col-md-4"><span>Add othername/nickname</span></div>
                </div>
                <hr/>
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Birthday</span></div>
                    <div className="col-md-4"><span><a href="">Add birthday</a></span></div>
                  </div>
                </li>
                <hr/>
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Education Level</span></div>
                    <div className="col-md-4"><span><a href="">Add education level</a></span></div>
                  </div>
                </li>
                <hr/>
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Website</span></div>
                    <div className="col-md-4"><span><a href="">Add website</a></span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="panel-label">System Settings</p>
          <div className="panel">
            <div className="panel-body">
              <ul className="list-unstyled task-list">
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>Language</span></div>
                    <div className="col-md-4"><span>System Default(English)(United States)</span></div>
                  </div>
                </li>
                <hr/>
                <div className="row">
                  <div className="col-md-6 cuong-head"><span>Privacy Settings</span></div>
                  <div className="col-md-4"><span>everyone in my insitution can view my profile infomation</span></div>
                </div>
              </ul>
            </div>
          </div>
          <p className="panel-label">External Connections</p>
          <div className="panel">
            <div className="panel-body">
              <ul className="list-unstyled task-list">
                <li>
                  <div className="row">
                    <div className="col-md-6 cuong-head"><span>OneDrive</span></div>
                    <div className="col-md-4"><span><a href="">Connect Account</a></span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
