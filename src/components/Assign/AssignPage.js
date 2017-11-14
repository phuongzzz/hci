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
          <div className="col-md-6 cuong-payment-user">
            <h3>Payment User Infomation</h3>
            <div className="panel">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3">Name</div>
                  <div className="col-md-9"><input type="text" className="form-control" placeholder="Input your name here..."/></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">Phone</div>
                  <div className="col-md-9"><input type="text" className="form-control" placeholder="Input your phone number here..."/></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">Email</div>
                  <div className="col-md-9"><input type="text" className="form-control" placeholder="Input your email here..."/></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">Address</div>
                  <div className="col-md-9"><input type="text" className="form-control" placeholder="Input your address here..."/></div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">Payment Message</div>
                  <div className="col-md-9"><textarea type="text" className="form-control" placeholder="Input payment message here..."/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Receive Infomation</h3>
            <div className="panel">
              <div className="panel-body">
                <h4 className="text-left">USER INFO</h4>
                <div className="row">
                  <div className="col-md-3">Name</div>
                  <div className="col-md-9">Nguyen Van Quy</div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-3">Email</div>
                  <div className="col-md-9">quynguyen2201@gmail.com</div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-3">Phone</div>
                  <div className="col-md-9">01287144074</div>
                </div>
                <hr/>
                <h4 className="text-left">PAYMENT INFO</h4>
                <div className="row">
                  <div className="col-md-3">Business Trip</div>
                  <div className="col-md-9">Hs Noi Business</div>
                </div>
                <br/>
                <div className="row">
                  <div className="col-md-3">Amount of Money</div>
                  <div className="col-md-9">30.000.000d</div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <button type="button" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
});


export default AssignPage;
