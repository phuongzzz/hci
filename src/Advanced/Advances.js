import React from 'react';
import './Advances.css';

class Advances extends React.Component {
  render() {
    return (
      <div className="row col-md-6 col-md-offset-3">
        <h3 className="title-payment">Request for Advances</h3>
        <form>
          <br/>
          <span className="fsLabel">Request by</span>
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="form-control" id="name"/>
              <label className="fsSupporting">First Name</label>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" id="name"/>
              <label className="fsSupporting">Last Name</label>
            </div>
          </div>
          <br/>
          <div className="form-group">
            <span>Department</span>
            <input type="text" className="form-control" id="dep"/>
          </div>
          <div className="form-group">
            <span>Reason</span>
            <input type="text" className="form-control" id="content"/>
          </div>
          <div className="form-group">
            <span>Amount Requested</span>
            <input type="text" className="form-control" id="value"/>
          </div>
          <div className="form-group">
            <span>Time Advances</span>
            <input type="text" className="form-control" id="value"/>
          </div>
          <div className="form-group">
            <button className="btn-success btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Advances;
