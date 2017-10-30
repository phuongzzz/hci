import React from 'react';
import './Payment_suggestion.css';
class Payment extends React.Component {
  render() {
    return (
      <div class="row col-md-6 col-md-offset-3">
        <h3 class="title-payment">Payment Suggestion</h3>
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
            <span>Content</span>
            <input type="text" class="form-control" id="content"/>
          </div>
          <div class="form-group">
            <span>Amount Requested</span>
            <input type="text" class="form-control" id="value"/>
          </div>
          <div class="form-group">
            <span>Attach documents</span>
            <input id="file-upload" type="file"/>
          </div>
          <div class="form-group">
            <button class="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Payment;
