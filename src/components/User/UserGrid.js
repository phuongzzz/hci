import React from 'react';
import { Link } from 'react-router';
import User from './User';
import './user-grid.css';

const UserGrid = React.createClass({
  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({search: event.target.value});
  },

  render() {
    let filteredUsers = this.props.users.filter(
      (user) => {
        return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="container">
        <div className="panel">
    <div className="panel-body">
      <div className="main-box clearfix">
        <div className="table-responsive">
          <table className="table cuong-user-list">
            <thead>
              <tr>
                <th><span>User</span></th>
                <th><span>Created</span></th>
                <th className="text-center"><span>Status</span></th>
                <th><span>Email</span></th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Mila Kunis</a>
                  <span className="user-subhead">Admin</span>
                </td>
                <td>
                  2013/08/08
                </td>
                <td className="text-center">
                  <span className="label label-default">Inactive</span>
                </td>
                <td>
                  <a href="#">mila@kunis.com</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">George Clooney</a>
                  <span className="user-subhead">Member</span>
                </td>
                <td>
                  2013/08/12
                </td>
                <td className="text-center">
                  <span className="label label-success">Active</span>
                </td>
                <td>
                  <a href="#">marlon@brando.com</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Ryan Gossling</a>
                  <span className="user-subhead">Registered</span>
                </td>
                <td>
                  2013/03/03
                </td>
                <td className="text-center">
                  <span className="label label-danger">Banned</span>
                </td>
                <td>
                  <a href="#">jack@nicholson</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Emma Watson</a>
                  <span className="user-subhead">Registered</span>
                </td>
                <td>
                  2004/01/24
                </td>
                <td className="text-center">
                  <span className="label label-warning">Pending</span>
                </td>
                <td>
                  <a href="#">humphrey@bogart.com</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Robert Downey Jr.</a>
                  <span className="user-subhead">Admin</span>
                </td>
                <td>
                  2013/12/31
                </td>
                <td className="text-center">
                  <span className="label label-success">Active</span>
                </td>
                <td>
                  <a href="#">spencer@tracy</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Mila Kunis</a>
                  <span className="user-subhead">Admin</span>
                </td>
                <td>
                  2013/08/08
                </td>
                <td className="text-center">
                  <span className="label label-default">Inactive</span>
                </td>
                <td>
                  <a href="#">mila@kunis.com</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">George Clooney</a>
                  <span className="user-subhead">Member</span>
                </td>
                <td>
                  2013/08/12
                </td>
                <td className="text-center">
                  <span className="label label-success">Active</span>
                </td>
                <td>
                  <a href="#">marlon@brando.com</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Ryan Gossling</a>
                  <span className="user-subhead">Registered</span>
                </td>
                <td>
                  2013/03/03
                </td>
                <td className="text-center">
                  <span className="label label-danger">Banned</span>
                </td>
                <td>
                  <a href="#">jack@nicholson</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Emma Watson</a>
                  <span className="user-subhead">Registered</span>
                </td>
                <td>
                  2004/01/24
                </td>
                <td className="text-center">
                  <span className="label label-warning">Pending</span>
                </td>
                <td>
                  <a href="#">humphrey@bogart.com</a>
                </td>
                <td>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt=""/>
                  <a href="#" className="user-link">Robert Downey Jr.</a>
                  <span className="user-subhead">Admin</span>
                </td>
                <td>
                  2013/12/31
                </td>
                <td className="text-center">
                  <span className="label label-success">Active</span>
                </td>
                <td>
                  <a href="#">spencer@tracy</a>
                </td>
                <td className="phuong-td">
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                  <a href="#" className="table-link cuong-danger">
                    <span className="fa-stack">
                      <i className="fa fa-square fa-stack-2x"></i>
                      <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
});

export default UserGrid;
