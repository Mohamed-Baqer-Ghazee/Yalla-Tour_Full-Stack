import React from "react";
import "./create.css";

const InputField = (props) => {
  return (
    <div className="form-outline inputField">
      <input {...props} />
    </div>
  );
};

export default InputField;
