import React from 'react';

const SinglePrepaid = ({match,data}) => {
  const prepaid = data.find(p => p.id == match.params.prepaidId);
  let prepaidData;

  if(prepaid) {
    prepaidData = <div>
      <h3> {prepaid.request_person} </h3>
      <p>{prepaid.department}</p>
      <h4>{prepaid.period}</h4></div>
  }
  else
    prepaidData = <h2> Sorry. Item does not exist </h2>;
  return (
    <div>
      <div>
        {prepaidData}
      </div>
    </div>
  )
};

export default SinglePrepaid;
