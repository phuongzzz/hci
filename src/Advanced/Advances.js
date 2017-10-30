import React from 'react';
import './Advances.css';

class Advances extends React.Component {
  render() {
    return (
      <div class="row col-md-6 col-md-offset-3">
        <h3 class="title-payment">Request for Advances</h3>
        <form>
          <br/>
          <span class="fsLabel">Request by</span>
          <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" id="name"/>
              <label class="fsSupporting">First Name</label>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" id="name"/>
              <label class="fsSupporting">Last Name</label>
            </div>
          </div>
          <br/>
          <div class="form-group">
            <span>Department</span>
            <input type="text" class="form-control" id="dep"/>
          </div>
          <div class="form-group">
            <span>Reason</span>
            <input type="text" class="form-control" id="content"/>
          </div>
          <div class="form-group">
            <span>Amount Requested</span>
            <input type="text" class="form-control" id="value"/>
          </div>
          <div class="form-group">
            <span>Time Advances</span>
            <input type="text" class="form-control" id="value"/>
          </div>
          <div class="form-group">
            <button class="btn-success btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Advances;
