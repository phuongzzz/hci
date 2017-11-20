import React from 'react';
import { Link } from 'react-router';
import './report-page.css';
import toastr from 'toastr';
import { hashHistory } from 'react-router';

const ReportPage = React.createClass({
  getInitialState: function() {
    return {
      showResponse: false,
      search: ''
    };
  },

  updateSearch(event) {
    this.setState({search: event.target.value});
  },

  onClick: function() {
    this.setState({ showResponse: !this.state.showResponse });
  },

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      // this.setState({ showResponse: !this.state.showResponse });
      hashHistory.push("/");
      toastr.error("Cancelled adding request");
    }
  },

  handleSubmit(e) {
    var last_report_id = parseInt(
      this.props.reports[this.props.reports.length - 1].id, 10);
    var next_report_id = ++last_report_id;
    var id = next_report_id;

    var last_student_id = parseInt(
      this.props.reports[this.props.reports.length - 1].student_id, 10);
    var next_student_id = ++last_student_id;
    var student_id = next_student_id;

    var name = this.refs.name.value;
    var link = this.refs.link.value;
    this.setState({ showResponse: !this.state.showResponse });

    this.props.addNewReport(id, student_id, name, link);

    toastr.success("Create payment reques done");
  },

  render(){
    let filteredReports = this.props.reports.filter(
      (report) => {
        return report.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="container">
        <h4 className="text-center">Payment Request</h4>
              <div className="row">
        <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <form id="form1" className="well well-lg">
                <div className="col-xs-6">
                    <div className="form-group">
                      <label>Dear (*)</label>
                      <input required type="name" className="form-control" id="exampleInputName" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label>Full Name (*)</label>
                      <input required type="lastname" className="form-control" id="exampleInputLastName" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <label>Department (*)</label>
                      <select className="form-control" id="inputState">
                        <option selected="selected">IT</option>
                        <option selected="selected">Marketing</option>
                        <option selected="selected">Hr</option>
                        <option selected="selected">Design</option>
                        <option selected="selected">Development</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Payment's description</label>
                      <input required type="addr" className="form-control" id="exampleInputAddr" placeholder="Payment's description" />
                    </div>
                </div>
                <div className="col-xs-6">
                  <div className="well well-lg">
                    <div className="form-group">
                      <label>Quanity (*)</label>
                      <input required type="text" className="form-control" id="exampleInputEmail1" placeholder="Quanity" form="form1" />
                    </div>
                    <div className="form-group">
                      <label>Card Number (*)</label>
                      <input required type="number" className="form-control" id="exampleInputPassword1" placeholder="Card Number" form="form1" />
                    </div>
                  </div>
                    <div className="form-group">
                      <label>Required Documents</label>
                      <input type="file" id="exampleInputFile" />
                      <p className="help-block">Upload your required files here.</p>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />Choose many files
                      </label>
                    </div>
                  <Link to="/marks" className="btn btn-success">Submit Your Request</Link>
                  &nbsp; &nbsp;
                  <button type="button" className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                </div>
                  <div className="clearfix"></div>
                </form>
              </div>
            </div>
      </div>
      </div>
    )
  }
});

export default ReportPage;
