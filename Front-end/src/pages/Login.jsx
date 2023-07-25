import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import BackgroundBoxes from "../components/BackgroundBoxes/BackgroundBoxes";
import Navbar from "../components/Navbar/Navbar";
function Login() {
  return (
    <div className="login">
    <Navbar />
      <LoginForm />

      <BackgroundBoxes />
    </div>
  );
}

export default Login;
