import React from 'react';
import './Plan.css';

const Plan = ({match,data}) => {
  const plan = data.find(p => p.id == match.params.planId);
  let planData;

  if(plan) {
    console.log(plan);
    planData = <div className="phuong-scroll">
      <h3 className="phuong-bold">Plan Name</h3>
      <p> {plan.plan_name} </p>
      <hr/>
      <h3 className="phuong-bold">Department</h3>
      <p> {plan.department} </p>
      <hr/>  <h3 className="phuong-bold">Budget</h3>
      <p> {plan.plan_budget} </p>
      <hr/>  <h3 className="phuong-bold">Requirement</h3>
      <p> {plan.requirement} </p>
      <hr/>  <h3 className="phuong-bold">Location</h3>
      <p> {plan.location} </p>
      <hr/>  <h3 className="phuong-bold">Transport</h3>
      <p> {plan.transport} </p>
      <hr/>  <h3 className="phuong-bold">Description</h3>
      <p> {plan.description} </p>
      <hr/>
      <h3 className="phuong-bold">Period</h3>
      <p> {plan.period} </p>
      <hr/>
    </div>
  }
  else
    planData = <h2> Sorry. Product doesnt exist </h2>;
  return (
    <div>
      <div>
        {planData}
      </div>
    </div>
  )
};

export default Plan;
