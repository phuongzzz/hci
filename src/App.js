import React from 'react';
import { Link, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
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
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">WebSiteName</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </div>
        </nav>
        <Route path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/products" component={Products}/>

      </div>
    )
  }
}

export default App;
