import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Fit Assistant</h1>
        <form>
          <p>E-mail</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
