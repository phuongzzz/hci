import React from 'react';
import './assign-page.css';
import RegisteredTopic from '../Topic/RegisteredTopic';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const AssignPage = React.createClass({

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      hashHistory.push("/");
      toastr.warning("Cancelled");
    }
  },

  render(){


    return(
      <div className="row">
        <form action="">
          <br/>
          <div className="col-md-7 col-md-push-1 cuong-payment-user">
            <br/><br/>
            <h4 className="text-left">&nbsp;&nbsp;&nbsp; &nbsp;Payment User Infomation</h4>
            <div className="panel">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-2">Name</div>
                  <div className="col-md-7"><input type="text" className="form-control" placeholder="Nguyen Van Quy"/></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-2">Bank Account</div>
                  <div className="col-md-7"><input type="text" className="form-control" placeholder="01287144074"/></div>
                </div>

                <hr/>
                <div className="row">
                  <div className="col-md-2">Payment Message</div>
                  <div className="col-md-7"><textarea type="text" className="form-control" placeholder="Input payment message here..."/></div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-success">Submit</button> &nbsp; &nbsp; &nbsp;
            <button type="button" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
          </div>
          <div className="col-md-4">
            <div className="panel">
              <div className="panel-body">
                <p className="text-left"><b>User Info</b></p>
                <div className="row">
                  <div className="col-md-2">Name</div>
                  <div className="col-md-6">Nguyen Van Quy</div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-2">Email</div>
                  <div className="col-md-6">quynguyen2201@gmail.com</div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-2">Phone</div>
                  <div className="col-md-6">01287144074</div>
                </div>
                <hr/>
                <p className="text-left"><b>Payment Info</b></p>
                <div className="row">
                  <div className="col-md-2">Business Trip</div>
                  <div className="col-md-6">Hs Noi Business</div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-2">Amount of Money</div>
                  <div className="col-md-6">30.000.000d</div>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }
});


export default AssignPage;
