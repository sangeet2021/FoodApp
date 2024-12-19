import React from "react";

const Input = ({ label, id }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} />
    </p>
  );
};

export default Input;
