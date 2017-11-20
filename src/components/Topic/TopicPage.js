import React from 'react';
// import Topic from './Topic';
import RegisteredTopic from './RegisteredTopic';
import './topic-page.css';
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

  handleRegister(topic_id) {
    // event.preventDefault();
    // alert("Click ok" + this.props.topic.topic_id);
    if (this.props.registered_topics.length <= 2) {
      var topicToAdd = _.find(this.props.topics, {topic_id: topic_id});
      this.props.removeTopic(topic_id);
      this.props.addToRegisteredTopic(topicToAdd);
      toastr.success("Register " + topicToAdd.title + " done");
    }
    else {
      toastr.error("More than 3 topics? Are you a genius? ", {timeOut: 5000});
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
          <h4 className="quy-panel-title">Approve Plan</h4>
          <hr/>
          <div className="panel">
            <div className="panel-body quy-panel-body">
              <table className="table table-hover">
                <thead>
                <tr>
                  <th className="text-center">ID</th>
                  <th className="text-center">Part</th>
                  <th className="text-center">Employee</th>
                  <th className="text-center">Time</th>
                  <th className="text-center">Place</th>
                  <th className="text-center">Estimated Cost</th>
                  <th className="text-center">Detail</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Doing Sth</td>
                  <td>1 Week</td>
                  <td>Ha Noi</td>
                  <td>Room 6</td>
                  <td>Nguyen Van Quy</td>
                  <td>Doing something</td>
                  <td>
                    <div className="row quy-button">
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-ok"></span>
                      <span className="col-md-2 col-md-offset-2 glyphicon glyphicon-trash mai_reject"></span>
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
