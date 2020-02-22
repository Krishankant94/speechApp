import React from "react";

const Button = ({ children, onClick, primary, secondary, disabled }) => {
  return (
    <button
      className={`btn  ${primary ? "btn-primary" : ""} ${
        secondary ? "btn-secondary" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
