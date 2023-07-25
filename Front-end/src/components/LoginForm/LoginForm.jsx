import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={submit} className="login-form">
      <h4>login</h4>
      <label htmlFor="email" className="input-label">
        Email
      </label>
      <input type="text" name="email" className="" />
      <label htmlFor="pass" className="input-label">
        Password
      </label>
      <input type="password" name="pass" className="" />
      <button type="submit">Login</button>

      <h6>
        Don't have an account? <Link to={"/register"}>Create new</Link>
      </h6>
    </form>
  );
}

export default LoginForm;
