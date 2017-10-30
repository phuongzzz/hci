import React from 'react';
import Plan from './Plan';
import  { plans } from '../seed';
import  { Link, Route } from 'react-router-dom';

const PlanList = ({match}) => {

  const planlist = plans.map((plan) => (
    <tr key={plan.id}>
      <td>{plan.id}</td>
      <td>{plan.department}</td>
      <td><Link to={`${match.url}/${plan.id}`}>
        {plan.plan_name}
      </Link> </td>
      <td>{plan.responsible_person}</td>
      <td>{plan.period}</td>
    </tr>
  ));
  return (
    <div className="row">
      <div className="col-md-9">
        <table className="table">
          <thead>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Plan Name</th>
            <th>Responsible Person</th>
            <th>Time</th>
          </tr>
          </thead>
          <tbody>
          {planlist}
          </tbody>
        </table>
      </div>
      <div className="col-md-3">
        <h1>Plan details</h1>
        <Route path={`${match.url}/:planId`}
               component={(props)=><Plan data={plans} {...props}/>}/>
      </div>

    </div>
  )
}

export default PlanList;
