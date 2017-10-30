import React from 'react';

export class CreatePlan extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 form-group">
          <label>Plan's Name</label>
          <input className="form-control" type="text" ref="plan_name"/>
        </div>
        <div className="col-xs-6 form-group">
          <label>Plan's Location</label>
          <input className="form-control" type="text" ref="location"/>
        </div>
        <div className="col-xs-6">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <label>Plan's Time</label>
              <input className="form-control" type="text" ref="time"/>
            </div>
            <div className="col-xs-12 col-sm-6">
              <label>Plan's Estimated Budget</label>
              <input className="form-control" type="text" ref="budget"/>
            </div>
          </div>
        </div>
        <div className="col-xs-6 form-group">
          <label>Means of Transport</label>
          <input className="form-control" type="text" ref="transport"/>
        </div>
        <div className="col-xs-6 form-group">
          <label>Other Requirements</label>
          <textarea className="form-control" type="text" ref="requirement" rows={5}/>
        </div>
        <div className="col-xs-6 form-group">
          <label>Plan's Description</label>
          <textarea className="form-control" type="text" ref="description" rows={5}/>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">submit</button>
          <button className="btn btn-danger">cancel</button>
        </div>
      </div>
    )
  }
}

export default CreatePlan;
