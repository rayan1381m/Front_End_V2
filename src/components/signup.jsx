import "./signup.css";

function SignupForm() {
  return (
    <div className="container">
      <div className="header">
        <h1>JEDI</h1>
      </div>
      <form className="form-body">
        <div className="email-div">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="password-div">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Choose Password"
          />
          <input
            type="password"
            name="password"
            id="confirm-password"
            required
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <button type="submit" className="login-btn">
            Sign up
          </button>
        </div>
      </form>
      <div className="terms">
        <a href="">Already Have an account?</a>
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}

export default SignupForm;
