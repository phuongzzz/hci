import React from 'react';
import './mark-page.css';
import { Link } from 'react-router';
import  toastr from 'toastr';
import _ from 'lodash';

// import { printJS } from 'print.js/';


const MarkPage = React.createClass({

  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({ search: event.target.value });
  },

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      // hashHistory.push("/");
      toastr.warning("Deleted successfuly");
    } else {
      toastr.success("You cancled");
    }
  },

  handleClick(e) {
    e.preventDefault();
    alert("Nut hoat dong roi ong oi");
    // printJS('docs/printjs.pdf');
  },

  render() {
    let filteredMarks = this.props.marks.filter(
      (mark) => {
        return mark.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="container">
        <div className="col-md-12">
          <br />
          <h4 className="quy-panel-title text-left" >
            <span className="fa fa-credit-card"></span> &nbsp;
            Payment Check and Approve</h4>
          <hr />
          <div className="panel">
            <div className="panel-body quy-panel-body">
              <table className="table table-hover">
                <thead className="content-company">
                  <tr>
                    <th className="text-left">ID</th>
                    <th className="text-left">Part</th>
                    <th className="text-left">Employee</th>
                    <th className="text-left">Bank Account</th>
                    <th className="text-left">Business Trip</th>
                    <th className="text-left">Payment Content</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">File Include</th>
                    <th className="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td className="text-left">
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE........</p></td>
                    <td className="text-left">
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></Link>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"  onClick={this.handleCancel}  ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td className="text-left">
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td className="text-left">
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></Link>
                        <span  onClick={this.handleCancel}  className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td className="text-left">
                      <a href="http://drive.google.com/SIE12A">http://drive.google.com/SIE12A</a>
                      <a href="http://dropbox.com/SIE<">http://dropbox.com/SIE</a></td>
                    <td className="text-left">
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></Link>
                        <span   onClick={this.handleCancel}  className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td className="text-left">
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td className="text-left">
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></Link>
                        <span  onClick={this.handleCancel}  className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td>
                      <p className="text-left">http://drive.google.com/SIE12A</p>
                      <p className="text-left">http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></Link>
                        <span  onClick={this.handleCancel}  className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td className="text-left">
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td className="text-left">
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></Link>
                        <span  onClick={this.handleCancel}  className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">1</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Nguyen Van Quy</td>
                    <td className="text-left">01287144074</td>
                    <td className="text-left">Room 6</td>
                    <td className="text-left">Need an limited credit card</td>
                    <td className="text-left">Infinity</td>
                    <td className="text-left link-driver">
                      <p><i>http://drive.google.com/SIE12A</i></p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td className="text-left">
                      <div className="row quy-button" >
                        <Link to="/assigns" className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></Link>
                        <span  onClick={this.handleCancel} className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default MarkPage;
