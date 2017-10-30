import React from 'react';

const Plan = ({match,data}) => {
  const plan = data.find(p => p.id == match.params.planId);
  let planData;

  if(plan) {
    console.log(plan);
    planData = <div>
      <h3> {plan.plan_name} </h3>
      <p>{plan.department}</p>
      <h4>{plan.responsible_person}</h4></div>
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
