import React from 'react';
// import Topic from './Topic';
import RegisteredTopic from './RegisteredTopic';
import './topic-page.css';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import toastr from 'toastr';
import _ from 'lodash';

const TopicPage = React.createClass({

  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({search: event.target.value});
  },
  handleCancel(e) {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      hashHistory.push("/");
      toastr.warning("Cancel creating new request");
    } else {
      toastr.success("Create new request done");
    }
  },

  render() {

    var role = sessionStorage.getItem('role');

    let filteredTopics = this.props.topics.filter(
      (topic) => {
        return topic.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="container">
        <div className="col-md-12">
          <br/>
          <h4 className="quy-panel-title text-left">
            &nbsp;&nbsp;<span className="fa fa-check"></span>
            Approve Plan</h4>
          <i className="col-md-5 col-md-push-7 mai-note">(Click $ trong column Estimated Cost (*) de xem chi tiet du toan)</i>
          <div className="panel">
            <div className="panel-body quy-panel-body">
              <table className="table table-striped table-bordered table-list ">
                <thead>
                <tr className="content-company" >
                  <th className="text-left">ID</th>
                  <th className="text-left">Part</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Estimated Cost(*)</th>
                  <th className="text-left">Place</th>
                  <th className="text-left">Employee</th>
                  <th className="text-left">Detail</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="text-left">1</td>
                  <td className="text-left">Trao doi voi khach hang</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Ha Noi</td>
                  <td className="text-left">Ninh Manh Dung</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">2</td>
                  <td className="text-left">Dam phan khach hang Nhat</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Hai Phong</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">3</td>
                  <td className="text-left">Giam sat du an tai Tokyo</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Bac Ninh</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">4</td>
                  <td className="text-left">Khao sat thi truong sanfancisco</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Quang Ngai</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">5</td>
                  <td className="text-left">Khao sat mat hang do choi nhat ban</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left" >Nha Trang</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete " onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">6</td>
                  <td className="text-left">Ky hop dong du an hr system</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">7</td>
                  <td className="text-left">Khao sat thi truong thuc dia</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">8</td>
                  <td className="text-left" >rien khai du an</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">9</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">11</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">12</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">13</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Khanh Hoa</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">15</td>
                  <td className="text-left">Doing Sth</td>
                  <td className="text-left">1 Week</td>
                  <td className="text-left"><Link to="/report/:reportId">$5.000.000</Link></td>
                  <td className="text-left">Can Tho</td>
                  <td className="text-left">Nguyen Van Quy</td>
                  <td className="text-left"><Link to="/mark/:markId">Trip Details...</Link></td>
                  <td className="text-left">
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok" onClick={this.handleRegister} ></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai-delete" onClick={this.handleCancel}></span>
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

export default TopicPage;
