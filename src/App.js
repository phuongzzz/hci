import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PlanList from './Plans/PlanList';
import ListPayment from "./ListPayment/ListPayment";
import CreatePlan from "./Plans/CreatePlan";
import Payment from "./PaymentSuggestion/Payment_suggestion";
import Advances from "./Advanced/Advances";
import Profile from "./Profile/Profile";
import Prepaid from "./Prepaid/Prepaid";
import './App.css';

const Home = () => (
  <div>
    <h2 className="text-center">Management Program</h2>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

class App extends React.Component {
  render() {
      document.body.style.backgroundColor = 'honeydew';
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">HCI-02</Link>
            </div>
            <ul className="nav navbar-nav">
              {/*<li><Link to="/category">Category</Link></li>*/}
              {/*<li><Link to="/products">Products</Link></li>*/}
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plans <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><Link to="/plans">All Plan</Link></li>
                        <li><Link to="/createplan">Create New Plan</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Payments <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><Link to="/listpayment">ListPayment</Link></li>
                        <li><Link to="/paymentsuggestion">Payment Suggestion</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Advances <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><Link to="/advances">Advances Request</Link></li>
                        <li><Link to="/prepaid">Prepaid</Link></li>
                    </ul>
                </li>
              <li><Link to="/profile">Profile</Link></li>

            </ul>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            {/*<Route path="/category" component={Category}/>*/}
            {/*<Route path="/products" component={Products}/>*/}
            <Route path="/plans" component={PlanList}/>
            <Route path="/listpayment" component={ListPayment}/>
            <Route path="/createplan" component={CreatePlan}/>
            <Route path="/paymentsuggestion" component={Payment}/>
            <Route path="/advances" component={Advances}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/prepaid" component={Prepaid}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
