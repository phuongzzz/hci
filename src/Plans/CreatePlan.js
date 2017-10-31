import React from 'react';
import './CreatePlan.css';
import toastr from 'toastr';
import history from '../history';

export class CreatePlan extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    toastr.success("Your new plan has been created");
    history.push("/plans");
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Create new plan</h1>
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
          <button className="btn btn-primary phuong-btn" onClick={this.handleSubmit}>submit</button>
          <button className="btn btn-danger phuong-btn">cancel</button>
        </div>
      </div>
    )
  }
}

export default CreatePlan;
