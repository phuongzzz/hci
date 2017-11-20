import React from 'react';
import {Link} from 'react-router';
import './listcv.css';
import {hashHistory} from 'react-router';
import toastr from 'toastr';
// import {Icon} from 'react-fa';

const ListCVPage = React.createClass({
  handleCancel(e) {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      hashHistory.push("/");
      toastr.warning("Cancel creating new request");
    } else {
      toastr.success("Create new request done");
    }
  },
  showfield(name) {
    if (name == 'Other') document.getElementById('div1').innerHTML = 'Other: <input type="text" name="other" />';
    else document.getElementById('div1').innerHTML = '';
  },

  render() {
    return (
      <div className="container">
        <h6 className="text-center"><b>New Plan Request</b></h6>
        <div className="row col-md-11 col-md-push-1">
          <form action="" className="form-group">
            <div className="col-md-6">
              <div className="profile-right cuong-user-info">
                <div className="panel">
                  <div className="panel-body">
                    <ul className="list-unstyled task-list">
                      <li>
                        <div className="row">
                          <div><p className="title-plan"><b>Employee Name (*)</b></p></div>
                          <div><span><input type="text" className="cuong-input-box form-control" required
                                            placeholder="Enter Your Name Here.."/></span></div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div><p className="title-plan"><b>Phone (*)</b></p></div>
                          <div><span><input required type="number" className="cuong-input-box form-control"
                                            placeholder="Enter Your Phone Number Here..."/></span></div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div><p className="title-plan"><b>Email (*)</b></p></div>
                          <div><span><input required type="text" className="cuong-input-box form-control"
                                            placeholder="Enter Your Email Here.."/></span></div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div><p className="title-plan"><b>Bank Account (*)</b></p></div>
                          <div><span><input type="number" required className="cuong-input-box form-control"
                                            placeholder="Enter Your Bank Account Here..."/></span></div>
                        </div>
                      </li>
                      <hr/>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-right cuong-business-trip-info">
                <div className="panel">
                  <div className="panel-body">
                    <ul className="list-unstyled task-list">
                      <li>
                        <div className="row">
                          <div><p className="title-plan"> <b>Choose Work Schedule now (*)</b></p></div>
                          <select class="form-control" id="mai-select">
                            <option>Dam phan khach hang nhat</option>
                            <option>Giam sat du an tai Tokyo	</option>
                            <option>Khao sat thi truong sanfancisco	</option>
                            <option>Khao sat thi trong my	</option>
                            <option>Khao sat mat hang do choi nhat ban</option>
                            <option>Jena Gaines	</option>
                            <option>Charde Marshall	</option>
                            <option>Tatyana Fitzpatrick	</option>
                            <option>Bradley Greer	</option>
                            <option>Jenette Caldwell	</option>
                            <option>Michael Silva	 Fitzpatrick	</option>
                            <option value="Other">others</option>
                          </select>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div><p className="title-plan"><b>Place (*)</b></p></div>
                          <select class="form-control" id="mai-select">
                            <option>Ha Noi</option>
                            <option>Hai Phong</option>
                            <option>Khanh Hoa</option>
                            <option>Ho Chi Minh</option>
                            <option>Bac Giang</option>
                            <option value="Other">others</option>
                          </select>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div><p className="title-plan"><b>Estimated Cost (*)</b></p></div>
                          <div><span className="fa fa-money money">
                            &nbsp; Allowability: $320,800
                            <hr/>
                            <Link to="/classe/:className"><i className="dutoan"><u>Detailed cost estimates*</u></i></Link>
                          </span></div>
                        </div>
                      </li>
                      <div className="row mai-dep">
                        <div><p className="title-plan"><b>Department (*)</b></p></div>
                        <div>
                          <div className="dropdown">
                            <select class="form-control" id="mai-select">
                              <option>IT</option>
                              <option>Hr</option>
                              <option>Marketing</option>
                              <option>Design</option>
                              <option>Management</option>
                              <option value="Other">others</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-11">
                <p className="cuong-panel-title text-left">&nbsp;&nbsp;<b>Business Trip Details</b></p>
                <div className="panel">
                  <div className="panel-body">
                    <table className="table table-hover">
                      <thead>
                      <tr>
                        <th className="text-left">ID</th>
                        <th className="text-left">Job Details</th>
                        <th className="text-left">Time</th>
                        <th className="text-left">Place</th>
                        <th className="text-left">Department</th>
                        <th className="text-left">Partner</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td className="text-left">1</td>
                        <td className="text-left">
                          <select class="form-control" id="mai-select1">
                            <option>Dam phan voi Sphinx</option>
                            <option>Tiep khach hoi nghi</option>
                            <option>Tham du dien dan</option>
                            <option>Gap doi tac Framgia</option>
                            <option>Ky hop dong</option>
                            <option value="Other">others</option>
                          </select>
                          <div id="div1"></div>
                        </td>
                        <td className="text-left">
                          1 ngay
                        </td>
                        <td className="text-left">
                          Bac Giang
                        </td>
                        <td className="text-left">
                          FLC Thanh Hoa
                        </td>
                        <td className="text-left">
                          Nguyen Van Quy
                        </td>
                      </tr>
                      </tbody>
                      <tbody>
                      <tr>
                        <td className="text-left">2</td>
                        <td className="text-left">
                          <select class="form-control" id="mai-select1">
                            <option>Khao sat thi truong</option>
                            <option>Tiep khach hoi nghi</option>
                            <option>Tham du dien dan</option>
                            <option>Gap doi tac Framgia</option>
                            <option>Ky hop dong</option>
                            <option value="Other">others</option>
                          </select>
                          <div id="div1"></div>
                        </td>
                        <td className="text-left">
                          2 ngay
                        </td>
                        <td className="text-left">
                          Ha Noi
                        </td>
                        <td className="text-left">
                          Van Phong Quoc hoi Ha Noi
                        </td>
                        <td className="text-left">
                          Nguyen Van Quy
                        </td>
                      </tr>
                      </tbody>
                      <tbody>
                      <tr>
                        <td className="text-left">3</td>
                        <td className="text-left">
                          <select class="form-control" id="mai-select1">
                            <option>Thu mua nguyen vat lieu</option>
                            <option>Tiep khach hoi nghi</option>
                            <option>Tham du dien dan</option>
                            <option>Gap doi tac Framgia</option>
                            <option>Ky hop dong</option>
                            <option value="Other">others</option>
                          </select>
                          <div id="div1"></div>
                        </td>
                        <td className="text-left">
                          2 ngay
                        </td>
                        <td className="text-left">
                         Bac Giang
                        </td>
                        <td className="text-left">Cac tinh phia bac</td>
                        <td className="text-left">Nguyen Le Hang</td>
                      </tr>
                      </tbody>
                      <tbody>
                      <td className="text-left">&nbsp;4</td>
                      <td className="text-left">&nbsp;&nbsp;
                        <a href=""><span className="fa fa-plus"></span></a>
                        ................
                      </td>
                      <td>............</td>
                      <td>.....................</td>
                      <td>.....................</td>
                      <td>.....................</td>
                      </tbody>
                    </table>
                    <button type="submit" className="btn btn-success btn-lg">Submit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger btn-lg" onClick={this.handleCancel}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>


      </div>
    )
  }
});

export default ListCVPage;
