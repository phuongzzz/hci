import React from 'react';
import './responding-page.css';
import {Link} from 'react-router';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const RespondingPage = React.createClass({

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      hashHistory.push("/");
      toastr.warning("Cancel creating form");
    } else {
      hashHistory.push("/marks");
      toastr.success("Create form done");
    }
  },

  render(){
    return(
      <div className="container">
    <br/>
    <h4 className="quy-panel-title">APPLICATION FOR ADVANCE</h4>
    <hr/>
    <div className="row col-md-6 col-md-offset-3">
      <form action="" className="form-group">
      <div className="row quy-date">
        <div className="col-md-1 col-md-offset-6">Time</div>
        <div className="col-md-4">
          <input  className="form-control" type="date"/>
        </div>
      </div>
      <br/>
      <div className="profile-right quy-user-info">
        <div className="panel">
            <div className="panel-body quy-panel-body">
                <ul className="list-unstyled task-list">
                    <li>
                      <div className="row">
                          <div ><span>Dear: (*)</span></div>
                          <div> <span><input required type="text" className="form-control mai-input" placeholder="Enter Name Here.."/></span></div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                          <div><span>Full Name: (*)</span></div>
                          <div><span><input required type="text" className="form-control mai-input" placeholder="Enter Your Full Name Here..."/></span></div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                          <div ><span>Department: (*)</span></div>
                          <div className="dropdown">
                            <select class="form-control" id="mai-select">
                              <option>IT</option>
                              <option>Hr</option>
                              <option>Marketing</option>
                              <option>Design</option>
                              <option>Management</option>
                              <option value="Other">others</option>
                            </select>
                        </div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                    <div className="row">
                      <div ><span>Estimate Cost (*)</span></div>
                      <div ><span><input required type="number" className="form-control mai-input" placeholder="Enter number cost..."/></span></div>
                    </div>
                    </li>
                    <hr/>
                    <li>
                    <div className="row">
                      <div ><span>Reason for advance: (*)</span></div>
                      <div ><span><textarea required type="text" className="form-control mai-input" placeholder="Enter Your Bank Account Here..."></textarea></span></div>
                      <Link to="#/classe/:className"><span className="dutoan"><i><u>Detailed cost estimates</u></i></span></Link>
                    </div>
                    </li>
                    <hr/>
                    <li>
                    <div className="row">
                      <div ><span>Billing Period (*)</span></div>
                      <div ><span><input type="date" required className="form-control mai-input" placeholder="Enter time..."/></span></div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      <div className="row col-md-6 col-md-offset-4" >
        <button type="submit" className="btn btn-success">Submit</button>
        &nbsp; &nbsp; &nbsp;
        <button type="button" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
      </div>
      </form>
    </div>
  </div>
    )
  }

});


export default RespondingPage;
