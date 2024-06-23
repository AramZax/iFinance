// Button.js
import React from "react";
import "./button.scss";

const Button = ({
  type = "button",
  onClick,
  label,
  className,
  disabled = false,
  color,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={{ background: `${color}` }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
