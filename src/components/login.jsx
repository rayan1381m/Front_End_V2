import "./login.css";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="header">
        <h1>JEDI</h1>
      </div>
      <form className="form-body">
        <div className="email-div">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="email"
            id="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
        </div>
        <div>
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
