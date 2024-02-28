import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const LoginForm = ({username, updatedUsername, invalidCredDisplay}) => {
  return (
    <div className="loginFormDiv">
      <form className="loginForm">
        <div>Log in to NoteApp</div>
        <div className="invalidCredentials" style={{display: invalidCredDisplay}}>Invalid email or password</div>
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
        />
        <br />
        <div className="forgotPassword">
          <Link to="/">Forgot password?</Link>
        </div>
        <input className="submit" type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm