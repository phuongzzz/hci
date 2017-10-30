import React from 'react';
import { Link, Route } from 'react-router-dom';
import { prepaids } from "../seed";
import SinglePrepaid from "./SinglePrepaid";

const Prepaid = ({match}) => {
    const prepaidList = prepaids.map((prepaid) => (
      <tr key={prepaid.id}>
        <td><Link to={`${match.url}/${prepaid.id}`}>
          {prepaid.id}
        </Link> </td>
        <td>{prepaid.request_person}</td>
        <td>{prepaid.period}</td>
        <td>{prepaid.department}</td>
        <td><a href="#">Approve</a> | <a href="#">Reject</a></td>
      </tr>
    ));
    return (
      <div className="row">
        <div className="col-md-9">
          <table className="table">
            <thead>
            <tr>
              <th>ID</th>
              <th>Request Person</th>
              <th>Period</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {prepaidList}
            </tbody>
          </table>
        </div>
        <div className="col-md-3">
          <h1>Prepaid request details</h1>
          <Route path={`${match.url}/:prepaidId`}
                 component={(props)=><SinglePrepaid data={prepaids} {...props}/>}/>
        </div>
      </div>

    )
};

export default Prepaid;
