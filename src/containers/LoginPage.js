import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import "../App.css"

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className='loginFormDiv'>
        <form className="loginForm">
          <label for="username">Username</label>
          <br />
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value=""
          />
          <br />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            id="password"
            type="text"
            name="password"
            placeholder="Password"
            value=""
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;