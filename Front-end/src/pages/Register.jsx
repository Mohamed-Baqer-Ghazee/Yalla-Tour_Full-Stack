import React from "react";
import BackgroundBoxes from "../components/BackgroundBoxes/BackgroundBoxes";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Navbar from "../components/Navbar/Navbar";
function Register() {
  return (
    <div className="register">
    <Navbar />
      <RegisterForm />

      <BackgroundBoxes />
    </div>
  );
}

export default Register;
