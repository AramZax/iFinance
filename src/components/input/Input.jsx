import React from "react";
import "./input.scss"

const Input = ({
  name,
  register,
  label,
  errors,
  validationRules,
  type,
  ...props
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name, validationRules)}
        {...props}
      />
      {errors[name] && <p className="error-message">{errors[name].message}</p>}
    </div>
  );
};

export default Input;
