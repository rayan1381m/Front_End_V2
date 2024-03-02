//https://www.youtube.com/watch?v=bMRrSqWFKqM
//https://www.youtube.com/watch?v=Gl-vOU7ZU9A
//https://www.youtube.com/watch?v=PmPkAAu_QF4

import "./login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:3000/users/login", {
        username,
        password,
      });

      if (response.data.message === "Login successful") {
        const isAdmin = response.data.user.is_admin;
        if (isAdmin) {
          console.log("Redirecting to admin panel");
        } else {
          console.log("Redirecting to user panel");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Error logging in");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>JEDI</h1>
      </div>
      <form className="form-body" onSubmit={handleLogin}>
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
        {error && <p className="error">{error}</p>}
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
