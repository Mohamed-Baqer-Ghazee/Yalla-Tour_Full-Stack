import React from "react";
import "./style.css";

function RegisterForm() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={submit} className="register-form">
        <h5>Register</h5>

        {/* name */}
        <div className="name-inputs">
          <div className="inputs">
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstname" />
          </div>
          <div className="inputs">
            <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastname" />
          </div>
        </div>
        {/* name */}

        <div className="email-input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>

        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div className="phone-input">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
