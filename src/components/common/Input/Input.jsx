import React from "react";

const Input = ({ input, onChange }) => {
  return (
    <div className="form-group">
      <label>{input.label}</label>
      <input
        onChange={onChange}
        id={input.type}
        type={input.type}
        className="form-control"
      />
    </div>
  );
};

export default Input;
