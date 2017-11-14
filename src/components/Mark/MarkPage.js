import React from 'react';
import './mark-page.css';
import { Link } from 'react-router';

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
          <h4 className="quy-panel-title" >Payment Check and Approve</h4>
          <hr />
          <div className="panel">
            <div className="panel-body quy-panel-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Part</th>
                    <th>Employee</th>
                    <th>Bank Account</th>
                    <th>Business Trip</th>
                    <th>Payment Content</th>
                    <th>Amount</th>
                    <th>File Include</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE........</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Room 6</td>
                    <td>Nguyen Van Quy</td>
                    <td>01287144074</td>
                    <td>Room 6</td>
                    <td>Need an limited credit card</td>
                    <td>Infinity</td>
                    <td>
                      <p>http://drive.google.com/SIE12A</p>
                      <p>http://dropbox.com/SIE</p></td>
                    <td>
                      <div className="row quy-button" >
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" ></span>
                        <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject" ></span>
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
