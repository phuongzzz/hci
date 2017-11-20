import React from 'react';
import './responding-page.css';

const SingleClassResponding = React.createClass({

  render() {
    return (
      <div className="container-fluid">
        <main class='main-content bgc-grey-100'>
          <div id='mainContent'>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="bgc-white bd bdrs-3 p-20 mB-20">
                    <br/>
                    <h4 class="c-grey-900 mB-20">Work Schedule List</h4>
                    <table id="dataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
                      <thead className="mai-head">
                      <tr>
                        <th className="text-left">Title</th>
                        <th className="text-left">Description</th>
                        <th className="text-left">Address</th>
                        <th className="text-left">Start date</th>
                        <th className="text-left">End date</th>
                        <th className="text-left">Cost Estimate</th>
                        <th className="text-left">Department</th>
                        <th className="text-left">Position</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td className="text-left">Tiger Nixon</td>
                        <td className="text-left">System Architect</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2011/04/25</td>
                        <td className="text-left">2011/04/25</td>
                        <td className="text-left">$320,800</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">Dev</td>
                      </tr>
                      <tr>
                        <td className="text-left">Garrett Winters</td>
                        <td className="text-left">Accountant</td>
                        <td className="text-left">Tokyo</td>
                        <td className="text-left">2011/07/25</td>
                        <td className="text-left">2011/07/25</td>
                        <td className="text-left">$170,750</td>
                        <td className="text-left">Marketing</td>
                        <td className="text-left">Employee</td>
                      </tr>
                      <tr>
                        <td className="text-left">Ashton Cox</td>
                        <td className="text-left">Junior Technical Author</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2009/01/12</td>
                        <td className="text-left">2009/01/12</td>
                        <td className="text-left">$372,000</td>
                        <td className="text-left">Hr</td>
                        <td className="text-left">Employee</td>
                      </tr>
                      <tr>
                        <td className="text-left">Cedric Kelly</td>
                        <td className="text-left">Senior Javascript Developer</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2012/03/29</td>
                        <td className="text-left">2012/03/29</td>
                        <td className="text-left">$433,060</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTO</td>
                      </tr>
                      <tr>
                        <td className="text-left">Airi Satou</td>
                        <td className="text-left">Accountant</td>
                        <td className="text-left">Tokyo</td>
                        <td className="text-left">2008/11/28</td>
                        <td className="text-left">2008/11/28</td>
                        <td className="text-left">$372,000</td>
                        <td className="text-left">Hr</td>
                        <td className="text-left">Hr</td>
                      </tr>
                      <tr>
                        <td className="text-left">Brielle Williamson</td>
                        <td className="text-left">Integration Specialist</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2012/12/02</td>
                        <td className="text-left">2012/12/02</td>
                        <td className="text-left">$372,000</td>
                        <td className="text-left">Design</td>
                        <td className="text-left">Designer</td>
                      </tr>
                      <tr>
                        <td className="text-left">Herrod Chandler</td>
                        <td className="text-left">Sales Assistant</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2012/08/06</td>
                        <td className="text-left">2012/08/06</td>
                        <td className="text-left">$137,500</td>
                        <td className="text-left">Dieu hanh</td>
                        <td className="text-left">Employee</td>
                      </tr>
                      <tr>
                        <td className="text-left">Rhona Davidson</td>
                        <td className="text-left">Integration Specialist</td>
                        <td className="text-left">Tokyo</td>
                        <td className="text-left">2010/10/14</td>
                        <td className="text-left">2010/10/14</td>
                        <td className="text-left">$327,900</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">Dev</td>
                      </tr>
                      <tr>
                        <td className="text-left">Colleen Hurst</td>
                        <td className="text-left">Javascript Developer</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2009/09/15</td>
                        <td className="text-left">2009/09/15</td>
                        <td className="text-left">$205,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">Dev</td>
                      </tr>
                      <tr>
                        <td className="text-left">Sonya Frost</td>
                        <td className="text-left">Software Engineer</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2008/12/13</td>
                        <td className="text-left">2008/12/13</td>
                        <td className="text-left">$103,600</td>
                        <td className="text-left">Phien dich</td>
                        <td className="text-left">Comtor</td>
                      </tr>
                      <tr>
                        <td className="text-left">Jena Gaines</td>
                        <td className="text-left">Office Manager</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/12/19</td>
                        <td className="text-left">2008/12/19</td>
                        <td className="text-left">$90,560</td>
                        <td className="text-left">Marketing</td>
                        <td className="text-left">Employee</td>
                      </tr>
                      <tr>
                        <td className="text-left">Quinn Flynn</td>
                        <td className="text-left">Support Lead</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2013/03/03</td>
                        <td className="text-left">2013/03/03</td>
                        <td className="text-left">$342,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Charde Marshall</td>
                        <td className="text-left">Regional Director</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">$470,600</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Haley Kennedy</td>
                        <td className="text-left">Senior Marketing Designer</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2012/12/18</td>
                        <td className="text-left">$313,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Tatyana Fitzpatrick</td>
                        <td className="text-left">Regional Director</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/03/17</td>
                        <td className="text-left">$385,750</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Michael Silva</td>
                        <td className="text-left">Marketing Designer</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2012/11/27</td>
                        <td className="text-left">$198,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Paul Byrd</td>
                        <td className="text-left">Chief Financial Officer (CFO)</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/06/09</td>
                        <td className="text-left">$725,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Gloria Little</td>
                        <td className="text-left">Systems Administrator</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/04/10</td>
                        <td className="text-left">$237,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Bradley Greer</td>
                        <td className="text-left">Software Engineer</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2012/10/13</td>
                        <td className="text-left">$132,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Dai Rios</td>
                        <td className="text-left">Personnel Lead</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2012/09/26</td>
                        <td className="text-left">$217,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Jenette Caldwell</td>
                        <td className="text-left">Development Lead</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/09/03</td>
                        <td className="text-left">$345,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Yuri Berry</td>
                        <td className="text-left">Chief Marketing Officer (CMO)</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/06/25</td>
                        <td className="text-left">$675,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Caesar Vance</td>
                        <td className="text-left">Pre-Sales Support</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/12/12</td>
                        <td className="text-left">$106,450</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Doris Wilder</td>
                        <td className="text-left">Sales Assistant</td>
                        <td className="text-left">Sidney</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/09/20</td>
                        <td className="text-left">$85,600</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Angelica Ramos</td>
                        <td className="text-left">Chief Executive Officer (CEO)</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/10/09</td>
                        <td className="text-left">$1,200,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Gavin Joyce</td>
                        <td className="text-left">Developer</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/12/22</td>
                        <td className="text-left">$92,575</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Jennifer Chang</td>
                        <td className="text-left">Regional Director</td>
                        <td className="text-left">Singapore</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/11/14</td>
                        <td className="text-left">$357,650</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Brenden Wagner</td>
                        <td className="text-left">Software Engineer</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/06/07</td>
                        <td className="text-left">$206,850</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Fiona Green</td>
                        <td className="text-left">Chief Operating Officer (COO)</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/03/11</td>
                        <td className="text-left">$850,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Shou Itou</td>
                        <td className="text-left">Regional Marketing</td>
                        <td className="text-left">Tokyo</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/08/14</td>
                        <td className="text-left">$163,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Michelle House</td>
                        <td className="text-left">Integration Specialist</td>
                        <td className="text-left">Sidney</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/06/02</td>
                        <td className="text-left">$95,400</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Suki Burks</td>
                        <td className="text-left">Developer</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/10/22</td>
                        <td className="text-left">$114,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Prescott Bartlett</td>
                        <td className="text-left">Technical Author</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/05/07</td>
                        <td className="text-left">$145,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Gavin Cortez</td>
                        <td className="text-left">Team Leader</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2008/10/26</td>
                        <td className="text-left">$235,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Martena Mccray</td>
                        <td className="text-left">Post-Sales support</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/03/09</td>
                        <td className="text-left">$324,050</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Unity Butler</td>
                        <td className="text-left">Marketing Designer</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/12/09</td>
                        <td className="text-left">$85,675</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Howard Hatfield</td>
                        <td className="text-left">Office Manager</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2008/12/16</td>
                        <td className="text-left">$164,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Hope Fuentes</td>
                        <td className="text-left">Secretary</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/02/12</td>
                        <td className="text-left">$109,850</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Vivian Harrell</td>
                        <td className="text-left">Financial Controller</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/02/14</td>
                        <td className="text-left">$452,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Timothy Mooney</td>
                        <td className="text-left">Office Manager</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2008/12/11</td>
                        <td className="text-left">$136,200</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Jackson Bradshaw</td>
                        <td className="text-left">Director</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2008/09/26</td>
                        <td className="text-left">$645,750</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Olivia Liang</td>
                        <td className="text-left">Support Engineer</td>
                        <td className="text-left">Singapore</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/02/03</td>
                        <td className="text-left">$234,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Bruno Nash</td>
                        <td className="text-left">Software Engineer</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/05/03</td>
                        <td className="text-left">$163,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Sakura Yamamoto</td>
                        <td className="text-left">Support Engineer</td>
                        <td className="text-left">Tokyo</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/08/19</td>
                        <td className="text-left">$139,575</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Thor Walton</td>
                        <td className="text-left">Developer</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2013/08/11</td>
                        <td className="text-left">$98,540</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Finn Camacho</td>
                        <td className="text-left">Support Engineer</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/07/07</td>
                        <td className="text-left">$87,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Serge Baldwin</td>
                        <td className="text-left">Data Coordinator</td>
                        <td className="text-left">Singapore</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2012/04/09</td>
                        <td className="text-left">$138,575</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Zenaida Frank</td>
                        <td className="text-left">Software Engineer</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/01/04</td>
                        <td className="text-left">$125,250</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Zorita Serrano</td>
                        <td className="text-left">Software Engineer</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2012/06/01</td>
                        <td className="text-left">$115,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Jennifer Acosta</td>
                        <td className="text-left">Junior Javascript Developer</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2013/02/01</td>
                        <td className="text-left">$75,650</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Cara Stevens</td>
                        <td className="text-left">Sales Assistant</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/12/06</td>
                        <td className="text-left">$145,600</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Hermione Butler</td>
                        <td className="text-left">Regional Director</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/03/21</td>
                        <td className="text-left">$356,250</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Lael Greer</td>
                        <td className="text-left">Systems Administrator</td>
                        <td className="text-left">London</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2009/02/27</td>
                        <td className="text-left">$103,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Jonas Alexander</td>
                        <td className="text-left">Developer</td>
                        <td className="text-left">San Francisco</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2010/07/14</td>
                        <td className="text-left">$86,500</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Shad Decker</td>
                        <td className="text-left">Regional Director</td>
                        <td className="text-left">Edinburgh</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2008/11/13</td>
                        <td className="text-left">$183,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Michael Bruce</td>
                        <td className="text-left">Javascript Developer</td>
                        <td className="text-left">Singapore</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/06/27</td>
                        <td className="text-left">$183,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      <tr>
                        <td className="text-left">Donna Snider</td>
                        <td className="text-left">Customer Support</td>
                        <td className="text-left">New York</td>
                        <td className="text-left">2008/10/16</td>
                        <td className="text-left">2011/01/25</td>
                        <td className="text-left">$112,000</td>
                        <td className="text-left">IT</td>
                        <td className="text-left">CTo</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    )
  }
});


export default SingleClassResponding;