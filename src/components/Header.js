import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
  return (
    <div>
      <div className="nav">
        <Link className="navLink" to="/">
          <div>Logo</div>
        </Link>
        <nav className="leftNav">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/">
            About
          </Link>
          <Link className="navLink" to="/">
            Pricing
          </Link>
        </nav>
        <nav className="rightNav">
          <Link className="navLink" to="/login">
            Login
          </Link>
          <Link className="navLink" to="/">
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;