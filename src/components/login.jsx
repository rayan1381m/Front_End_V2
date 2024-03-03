//https://www.youtube.com/watch?v=bMRrSqWFKqM
//https://www.youtube.com/watch?v=Gl-vOU7ZU9A
//https://www.youtube.com/watch?v=PmPkAAu_QF4

import "./login.css";
import { useState } from "react";
import axios from "axios";

const users = [
  {
    name : "Rayan",
    isAdmin: true,
    password: "password123"
  }
]


function Login() {
  return (
    <div className="container">
      <div className="header">
        <h1>JEDI</h1>
      </div>
      <form className="form-body" >
        <div className="email-div">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="username"
            required
          />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="password"
          />
          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </div>
      </form>
      <div className="terms">
        <a href="">Create Account</a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Login;
