import React from 'react';
import _ from 'lodash';
import { hashHistory } from 'react-router';
import  toastr from 'toastr';
import './home-logged-in.css';

const HomeLoggedIn = React.createClass({

    handleCancel(e) {
      e.preventDefault();
      if(confirm("Are you sure?")) {
        hashHistory.push("/");
        toastr.warning("Cancel updating profile");
      } else {
        toastr.success("Update profile done");
      }
    },

  render() {
    var allUsers = this.props.users;
    var currentUser = _.find(allUsers, { username: sessionStorage.getItem('username') });
    // console.log(currentUser.username);
    return (
      <div className="phuong-profile-wrapper container-fluid">
        <div className="edit-content-wrapper">
          <br/>
          <div className="row">
            <div className="col-md-4">
              <br/><br/>
              <div className="phuong-card">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                <div className="container">
                  <h4><b className="text-center"> &nbsp; &nbsp; &nbsp; &nbsp;phuongzzz</b></h4>
                  <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-xs-6">
                  <form id="form1" className="well well-lg profile-border">
                    <div className="form-group">
                      <label>First Name (*)</label>
                      <input required type="name" className="form-control" id="exampleInputName" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="lastname" className="form-control" id="exampleInputLastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                      <label>Phone (*)</label>
                      <input required type="phone" className="form-control" id="exampleInputPhone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                      <label>Address (*)</label>
                      <input required type="addr" className="form-control" id="exampleInputAddr" placeholder="Address" />
                    </div>
                    {/*<div className="checkbox">*/}
                      {/*<label>*/}
                        {/*<input type="checkbox" /> Check me out*/}
                      {/*</label>*/}
                    {/*</div>*/}
                  </form>

                </div>
                <div className="col-xs-6">
                  <div className="well well-lg profile-border">
                    <div className="form-group">
                      <label>Email address (*)</label>
                      <input required type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" form="form1" />
                    </div>
                    <div className="form-group">
                      <label>Password (*)</label>
                      <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" form="form1" />
                    </div>
                  </div>
                  <form className="well well-lg profile-border">
                    <div className="form-group">
                      <label>File input</label>
                      <input type="file" id="exampleInputFile" />
                      <p className="help-block">Example block-level help text here.</p>
                    </div>
                    {/*<div className="checkbox">*/}
                      {/*<label>*/}
                        {/*<input type="checkbox" /> Check me out*/}
                      {/*</label>*/}
                    {/*</div>*/}
                  </form>
                  <div className="well well-sm profile-border">
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                    <button type="submit" className="btn btn-success" form="form1">Submit</button>
                    &nbsp; &nbsp; &nbsp;
                    <button type="" className="btn btn-danger" onClick={this.handleCancel} form="form1">Cancel</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default HomeLoggedIn;
