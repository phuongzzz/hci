import React from 'react';
import './report-page.css';
import {Link} from 'react-router';

const SingleReport = React.createClass({
  render() {
    return (
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
                      <p className="text-left col-md-2">Train</p>
                      <p className="text-left col-md-2"></p>
                      <p className="col-md-2">20km</p>
                    </div>
                    <p className="col-md-2 money-color">$100.000</p>
                  </div>
                  <div className="row">
                    <span className="col-md-4 text-left">Flight tickets:</span>
                    <div className="row col-md-7">
                      <p className="text-left col-md-4">Ha Noi</p>
                      <p className="text-left col-md-4">Can Tho</p>
                      <p className="text-left col-md-4">1 chieu</p>
                    </div>
                    <p className="col-md-1 money-color">$2.000.000</p>
                  </div>
                  <hr/>
                  <p className="text-left"><b><i >Accommodation expenses</i></b></p>
                  <div className="row">
                    <span className="col-md-4 text-left">Room rental costs:</span>
                    <div className="row col-md-7">
                      <p className="text-left col-md-5">Thanh pho</p>
                      &nbsp;
                      <p className="text-left col-md-4">450.000</p>
                      <p className="text-left col-md-2">1day</p>
                    </div>
                    <p className="col-md-1 money-color">$4.000.000</p>
                  </div>
                  <div className="row">
                    <span className="col-md-4 text-left">Eating:</span>
                    <div className="row col-md-6">
                      <p className="text-left col-md-6">Nha hang</p>
                      <p className="text-left col-md-2">1</p>
                    </div>
                    <p className="col-md-1 money-color">$4.000.000</p>
                  </div>
                  <hr/>
                  <p className="text-left"><b><i >Accommodation allowance</i></b></p>
                  <div className="row">
                    <span className="col-md-4 text-left">Subsidize</span>
                    <div className="row col-md-7">
                      <option className="text-left col-md-5">CEO</option>
                      <option className="text-left col-md-4">500.000</option>
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
    );
  }
});

export default SingleReport;