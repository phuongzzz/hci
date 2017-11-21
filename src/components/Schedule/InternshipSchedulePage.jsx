import React from 'react';
import './InternshipSchedulePage.css';
import { Link } from 'react-router';
import toastr from 'toastr';
import { hashHistory } from 'react-router';

const InternshipSchedulePage = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    toastr.success("Create Schedule Successfully");
    hashHistory.push("/company/:companyName");
  },

  render() {
    return(
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <form class="well well-lg">
            <h6>New Schedule</h6>
            <div>
              <div className="col-xs-6">
                <div className="form-group">
                  <label className="text-left">Title(*)</label>
                  <input type="text" className="form-control" placeholder="enter title..." required/>
                </div>
                <div className="form-group">
                  <label className="text-left">Description</label>
                  <input type="text" required placeholder="description..." className="form-control" required/>
                </div>
                <div className="form-group">
                  <label className="text-left">Address(*)</label>
                  <input type="text" required placeholder="address..." className="form-control" required/>
                </div>
                <div className="form-group">
                  <label className="text-left">Cost Estimate(*)</label>
                  <input type="number" required className="form-control" data-toggle="tooltip" title="budget: $10000 remaining" required/>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="text-left">Department</label>
                      <select class="form-control" id="mai-select">
                        <option>IT</option>
                        <option>Marketing</option>
                        <option>Design</option>
                        <option>Hr</option>
                        <option>Division</option>
                        <option value="Other">others</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="text-left">Position</label>
                      <select class="form-control" id="mai-select">
                        <option>CTO</option>
                        <option>CEO</option>
                        <option>BrSE</option>
                        <option>Hr</option>
                        <option>Developer</option>
                        <option value="Other">others</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="text-left">End Time(*)</label>
                      <input type="date" required className="form-control" required/>
                    </div>
                    <div className="form-group">
                      <label className="text-left">Start Time(*)</label>
                      <input type="date" required className="form-control" required/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-md-8">
              <div className="row">
                <table>
                  <thead>
                  <tr>
                    <td className="text-left"><label>Job Details</label></td>
                    <td className="text-left"><label>Time</label></td>
                    <td className="text-left"><label>Place</label></td>
                    <td className="text-left"><label>Department</label></td>
                    <td className="text-left"><label>Partner</label></td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-left"><input type="text" className="form-control"/></td>
                    <td className="text-left"><input type="time" className="form-control"/></td>
                    <td className="text-left"><input type="text" className="form-control"/></td>
                    <td className="text-left"><input type="text" className="form-control"/></td>
                    <td className="text-left"><input type="text" className="form-control"/></td>
                    <td className="text-left">&nbsp;</td>
                    <td className="fa fa-plus"></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Link to="/company/:companyName">
              <button type="submit" className="btn btn-success btn-lg" onClick={this.handleSubmit}>Submit</button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger btn-lg" onClick={this.handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

export default InternshipSchedulePage;
