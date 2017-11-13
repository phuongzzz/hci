import React from 'react';
import './home-not-logged-in.css';
import { Link } from 'react-router';

const HomeNotLoggedIn = React.createClass({
  render() {
    return (
      <div className="not-logged-in-wrapper">
        <div className="row">
          <div className="col-md-7">
            <div className="slogan-wrapper">
              <h2>Our clients come to us because we offer amazing experiences at unbeatble low price</h2>
              <h4>Don't waste your time anymore!<Link to="/login" className="phuong-simple-btn">Login</Link>to contact with your boss now!</h4>
              <h4>Don't have an account?</h4>
              <Link to="/contact" className="phuong-simple-btn">Register Now!</Link>
            </div>
          </div>
          <div className="col-md-5 featured-image">
          </div>
        </div>

      </div>
    );
  }
});

export default HomeNotLoggedIn;
