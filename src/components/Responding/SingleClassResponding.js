import React from 'react';
import './responding-page.css';
import toastr from 'toastr';
import {Link} from 'react-router';

const SingleClassResponding = React.createClass({

  getInitialState: function() {
    return { showResponse: false };
  },

  onClick: function() {
    this.setState({ showResponse: !this.state.showResponse });
  },

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      this.setState({ showResponse: !this.state.showResponse });
      toastr.error("Cancelled adding response");
    }
  },


  render(){

    return(
      <div className="row-responding">
        <div className="row col-md-11 col-md-push-1">
          <form>
            <div className="row col-md-6">
              <h6 className="text-left"><b>Detailed cost estimates</b></h6>
              <div className="panel">
                <div className="panel-body">
                  <p className="text-left"><b><i >Travel expenses</i></b></p>
                  <div className="row">
                    <span className="col-md-4 text-left">Move:</span>
                    <div className="row col-md-6">
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left" >Taxi</option>
                        <option className="text-left">Grabike</option>
                        <option className="text-left">Car</option>
                        <option className="text-left">Ship</option>
                        <option className="text-left">Train</option>
                        <option value="Other">others</option>
                      </select>
                      &nbsp;&nbsp;
                      <select class="form-control col-md-2" id="mai-select1">
                        <option>10km</option>
                        <option>20km</option>
                        <option>100km</option>
                        <option>40km</option>
                        <option>50km</option>
                        <option value="Other">others</option>
                      </select>
                    </div>
                    <p className="col-md-2 money-color">$100.000</p>
                  </div>
                  <div className="row">
                    <span className="col-md-4 text-left">Flight tickets:</span>
                    <div className="row col-md-7">
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">Ha Noi</option>
                        <option className="text-left">Nha Trang</option>
                        <option className="text-left">Can Tho</option>
                        <option className="text-left">Ha Giang</option>
                        <option className="text-left">Thanh Hoa</option>
                        <option value="Other">others</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">Ha Noi</option>
                        <option className="text-left">Nha Trang</option>
                        <option className="text-left">Can Tho</option>
                        <option className="text-left">Ha Giang</option>
                        <option className="text-left">Thanh Hoa</option>
                        <option value="Other">others</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">1 chieu</option>
                        <option className="text-left">2 chieu</option>
                      </select>
                    </div>
                    <p className="col-md-1 money-color">$2.000.000</p>
                  </div>
                  <hr/>
                  <p className="text-left"><b><i >Accommodation expenses</i></b></p>
                  <div className="row">
                    <span className="col-md-4 text-left">Room rental costs:</span>
                    <div className="row col-md-7">
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">Quan/Thanh pho</option>
                        <option className="text-left">Huyen/Xa</option>
                        <option className="text-left">others</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">450.000</option>
                        <option className="text-left">350.000</option>
                        <option value="Other">300.000</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">1day</option>
                        <option className="text-left">2day</option>
                        <option className="text-left">3day</option>
                        <option value="Other">other</option>
                      </select>
                    </div>
                    <p className="col-md-1 money-color">$4.000.000</p>
                  </div>
                  <div className="row">
                    <span className="col-md-4 text-left">Eating:</span>
                    <div className="row col-md-6">
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">Nha hang</option>
                        <option className="text-left">Khach san 5*</option>
                        <option className="text-left">Khach san 4*</option>
                        <option className="text-left">Nha an binh dan</option>
                        <option className="text-left">others</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">1</option>
                        <option className="text-left">2</option>
                        <option className="text-left">3</option>
                        <option className="text-left">4</option>
                        <option value="Other">others</option>
                      </select>
                    </div>
                    <p className="col-md-1 money-color">$4.000.000</p>
                  </div>
                  <hr/>
                  <p className="text-left"><b><i >Accommodation allowance</i></b></p>
                  <div className="row">
                    <span className="col-md-4 text-left">Subsidize</span>
                    <div className="row col-md-7">
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">CEO</option>
                        <option className="text-left">CTO</option>
                        <option className="text-left">Employee</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">500.000</option>
                        <option className="text-left">400.000</option>
                        <option value="Other">200.000</option>
                      </select>
                      <select class="form-control col-md-2" id="mai-select1">
                        <option className="text-left">1day</option>
                        <option className="text-left">2day</option>
                        <option className="text-left">3day</option>
                        <option value="Other">others</option>
                      </select>
                    </div>
                    <p className="col-md-1 money-color">$900.000</p>
                  </div>
                </div>
              </div>
              <hr className="hr"/>
              <div className="row">
                <p className="text-left col-md-4"><b>&nbsp;&nbsp;&nbsp;&nbsp;Total:</b></p>
                <p className="col-md-7 text-right total-color">$5.000.000</p>
              </div>
              <Link to="/listcv"><button type="submit" className="btn btn-success btn-lg">Submit</button>
                &nbsp;&nbsp;&nbsp;&nbsp;</Link>
              <button className="btn btn-danger btn-lg" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
          <div></div>
          <br/>
          <div className="col-md-5 col-md-push-1 mai-border">
            <h6 className="text-center"><b>Regulations</b></h6>
            <div>
              <i className="regulation">Thong tu so 40/2017/TT-BTC quy dinh che do cong tac phi, che do chi hoi nghi</i>
            </div>
            <div>
              <p className="regulation text-left"><b>Travel expenses</b></p>
              <p className="regulation text-left"> * Chi phi di va ve tu nha den co quan, san bay, nha ga, chi phi ve may bay 2 chieu (/1 chieu), ve tau, ve xe,......</p>
              <p className="regulation text-left"> * Chi phi di lai tai dia phuong bang cac phuong tien: xe om, taxi,...</p>
              <p className="regulation text-left"> * Cuoc phi hanh ly cua nguoi di cong tac bang may bay</p>
              <p className="regulation text-left"><b>Accommodation expenses</b></p>
              <p className="regulation text-left">* Muc phu cap de tra cho nguoi di cong tac: 200.000d/ngay</p>
              <p className="regulation text-left">* Truong hop cong tac tren bien dao: 250.000d/ngay</p>
              <p className="regulation text-left">* Truong hop di cong tac ve trong ngay thi xet theo so gio thuc te cong tac, thoi gian lam ngoai gio hanh chinh, quang duong di cong tac,...</p>
              <p className="regulation text-left"><b>Accommodation allowance</b></p>
              <p className="regulation text-left">* Lanh dao, Bo truong, thu truong va cac lanh dao co hs phi cap chuc vu la >1.25 thi: 1.000.000d/ngay/nguoi, khong phan biet noi cong tac</p>
              <p className="regulation text-left">* Di cong tac tai tinh thanh pho, do thi loai I thi: 450.000d/ngay/nguoi</p>
              <p className="regulation text-left">* Di cong tac tai huyen/xa thanh pho con lai: 350.000d/ngay/nguoi</p>
              <p className="regulation text-left">Con lai: 300.000d/ngay/nguoi</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});


export default SingleClassResponding;