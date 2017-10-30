import React from 'react';
import  { plans } from '../seed';

class PlanList extends React.Component {
  render() {
    const planlist = plans.map((plan) => (
      <tr key={plan.id}>
        <td>{plan.id}</td>
        <td>{plan.department}</td>
        <td>{plan.plan_name}</td>
        <td>{plan.responsible_person}</td>
        <td>{plan.period}</td>
      </tr>
    ));
    return (
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
    )
  }
}

export default PlanList;
