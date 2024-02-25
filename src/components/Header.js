import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
  return (
    <div>
      <div className="nav">
        <div>Logo</div>
        <nav className="leftNav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/">
            About
          </Link>
          <Link className="link" to="/">
            Pricing
          </Link>
        </nav>
        <nav className="rightNav">
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/">
            Signup
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;