import React from 'react';
import { requests } from "../seed";

export class Request extends React.Component {
  render() {
    const requestList = requests.map((request) => (
      <tr key={request.id}>
        <td>{request.id}</td
        <td>{request.department}</td>
        <td>{request.request_person}</td>
        <td>{request.budget}</td>
        <td><a className="approve" href="#">Approve</a> | <a className="reject" href="#">Reject</a></td>
      </tr>
    ));
    return (
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
    )
  }
};

export default Request;
