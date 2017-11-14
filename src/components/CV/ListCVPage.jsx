import React from 'react';
import { Link } from 'react-router';
import './listcv.css';
// import {Icon} from 'react-fa';

const ListCVPage = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="cuong-panel-title text-left">User Info</h4>
            <div className="profile-right cuong-user-info">
              <div className="panel">
                <div className="panel-body">
                  <ul className="list-unstyled task-list">
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Employee Name</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Your Name Here.." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Phone</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Your Phone Number Here..." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Email</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Your Email Here.." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Bank Account</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Your Bank Account Here..." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <div className="row">
                      <div className="col-md-4"><span>Department</span></div>
                      <div className="col-md-8">
                        <div className="dropdown">
                          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Department
                            <span className="caret"></span></button>
                          <ul className="dropdown-menu">
                            <li className="phuong-select"><a>HTML</a></li>
                            <li className="phuong-select"><a>CSS</a></li>
                            <li className="phuong-select"><a>JavaScript</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="cuong-panel-title text-left">Business Trip Info</h4>
            <div className="profile-right cuong-business-trip-info">
              <div className="panel">
                <div className="panel-body">
                  <ul className="list-unstyled task-list">
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Time</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Time Here.." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Place</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Place Here..." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Estimated Cost</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-input-box form-control" placeholder="Enter Number Here.." /></span></div>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Business Trip Content</span></div>
                        <div className="col-md-8"><span><input type="text" className="cuong-trip-content form-control" placeholder="Enter Business Trip Content Here..." /></span></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h4 className="cuong-panel-title text-left">Business Trip Details</h4>
            <div className="panel">
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Job Details</th>
                      <th>Time</th>
                      <th>Place</th>
                      <th>Department</th>
                      <th>Partner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Doing Sth</td>
                      <td>1 Week</td>
                      <td>Ha Noi</td>
                      <td>Room 6</td>
                      <td>Nguyen Van Quy</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Doing Sth</td>
                      <td>1 Week</td>
                      <td>Ha Noi</td>
                      <td>Room 6</td>
                      <td>Nguyen Van Quy</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Doing Sth</td>
                      <td>1 Week</td>
                      <td>Ha Noi</td>
                      <td>Room 6</td>
                      <td>Nguyen Van Quy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default ListCVPage;
