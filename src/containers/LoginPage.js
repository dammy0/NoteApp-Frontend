import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import "../App.css"

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function updatedUsername({ target }) {
    setUsername(target.value)
  }

  function updatedPassword({ target }) {
    setPassword(target.value);
  }

  return (
    <div>
      <Header />
      <div className="loginFormDiv">
        <form className="loginForm">
          <div>Log in to NoteApp</div>
          <div className="invalidCredentials">Invalid email or password</div>
          <label for="username">Username</label>
          <br />
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={updatedUsername}
          />
          <br />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={updatedPassword}
          />
          <br />
          <div className="forgotPassword">
            <Link to="/">Forgot password?</Link>
          </div>
          <input className="submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;