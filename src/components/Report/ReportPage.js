import React from 'react';
import { Link } from 'react-router';
import './report-page.css';
import toastr from 'toastr';

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
      this.setState({ showResponse: !this.state.showResponse });
      toastr.error("Cancelled adding report");
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

    toastr.success(name + " " + link);
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
                <div className="col-xs-6">
                  <form id="form1" className="well well-lg">
                    <div className="form-group">
                      <label>Dear</label>
                      <input type="name" className="form-control" id="exampleInputName" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="lastname" className="form-control" id="exampleInputLastName" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <label>Department</label>
                      <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Department" />
                    </div>
                    <div className="form-group">
                      <label>Payment's description</label>
                      <input type="addr" className="form-control" id="exampleInputAddr" placeholder="Payment's description" />
                    </div>
                  </form>
                </div>
                <div className="col-xs-6">
                  <div className="well well-lg">
                    <div className="form-group">
                      <label>Quanity</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Quanity" form="form1" />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Card Number" form="form1" />
                    </div>
                  </div>
                  <form className="well well-lg">
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
                  </form>
                  <div className="well well-sm">
                    <button type="submit" className="btn btn-success" form="form2">Submit Your Request</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
      </div>


    )
  }
});

export default ReportPage;
