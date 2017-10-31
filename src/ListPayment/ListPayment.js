import React from 'react';
import { requests } from "../seed";
import './Listpayment.css'

export class ListPayment extends React.Component {
  render() {
    const requestList = requests.map((request) => (
      <tr key={request.id}>
        <td>{request.id}</td>
        <td>{request.department}</td>
        <td>{request.request_person}</td>
        <td>{request.budget}</td>
        <td><a href="#">Approve</a> | <a href="#" className="reject">Reject</a></td>
      </tr>
    ));
    return (
      <div className="main-box clearfix">
        <div className="clearfix">
          <h3 className="pull-left">List Payment Suggestion</h3>
          <div className="pull-right daterange-filter">
            <i className="icon-calendar"></i>
            <span>October 2, 2017 - October 31, 2017</span>
            <b className="caret"></b>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Department</th>
              <th>Request Person</th>
              <th>Budget</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {requestList}
            </tbody>
          </table>
        </div>
        <ul className="pagination pull-right">
          <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
        </ul>
      </div>
    )
  }
};

export default ListPayment;
