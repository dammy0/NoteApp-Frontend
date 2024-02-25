import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const HomePage = () => {
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
      <div className='content'>
        <spam className='contentSpan'>10x </spam>Your Productivity Using this NoteApp
      </div>
      <div>
        next
      </div>
    </div>
  );
}

export default HomePage;