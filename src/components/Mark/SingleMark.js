import React from 'react';
import './mark-page.css';
import {hashHistory} from 'react-router';

const SingleMark = React.createClass({


  render() {
    return (
      <div>
        <div className="row">
          <br/>
          <div className="col-md-10 col-md-offset-1">
            <p className="cuong-panel-title text-left">&nbsp;&nbsp;<b>Business Trip Details</b></p>
            <div className="panel">
              <div className="panel-body">
                <table className="table table-hover">
                  <thead className="content-company">
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
                    <td className="text-left">Dam phan voi Sphinx</td>
                    <td className="text-left">1 tuan</td>
                    <td className="text-left">Ho Chi Minh</td>
                    <td className="text-left">FlC thanh hoa</td>
                    <td className="text-left">Ninh Manh Dung</td>
                  </tr>
                  </tbody>
                  <tbody>
                  <tr>
                    <td className="text-left">2</td>
                    <td className="text-left">Tiep khach hoi nghi</td>
                    <td className="text-left">1 ngay</td>
                    <td className="text-left">Ho Chi Minh</td>
                    <td className="text-left">Khach san binh minh</td>
                    <td className="text-left">NGuyen Van Quy</td>
                  </tr>
                  </tbody>
                  <tbody>
                  <tr>
                    <td className="text-left">4</td>
                    <td className="text-left">Ky hop dong</td>
                    <td className="text-left">1 ngay</td>
                    <td className="text-left">Hai phong</td>
                    <td className="text-left">Nha hang long dinh</td>
                    <td className="text-left">Hoang Ngoc Luc</td>
                  </tr>
                  </tbody>
                  <tbody>
                  <tr>
                    <td className="text-left">3</td>
                    <td className="text-left">Gap doi tac Framgia</td>
                    <td className="text-left">1 ngay</td>
                    <td className="text-left">Ho Chi Minh</td>
                    <td className="text-left">Dai hoc cong doan</td>
                    <td className="text-left">Nguyen Phu Cuong</td>
                  </tr>
                  </tbody>
                  <tbody>
                  <tr>
                    <td className="text-left">5</td>
                    <td className="text-left">Tiep khach</td>
                    <td className="text-left">1 ngay</td>
                    <td className="text-left">HCM</td>
                    <td className="text-left">Nha hang long dinh</td>
                    <td className="text-left">Tran Huu Nam Phuong</td>
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

export default SingleMark;