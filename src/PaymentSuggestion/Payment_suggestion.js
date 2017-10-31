import React from 'react';
import './Payment_suggestion.css';
class Payment extends React.Component {
  render() {
    return (
      <div className="row col-md-6 col-md-offset-3">
        <h3 className="title-payment">Payment Suggestion</h3>
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
            <span>Content</span>
            <input type="text" className="form-control" id="content"/>
          </div>
          <div className="form-group">
            <span>Amount Requested</span>
            <input type="text" className="form-control" id="value"/>
          </div>
          <div className="form-group">
            <span>Attach documents</span>
            <input id="file-upload" type="file"/>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Payment;
