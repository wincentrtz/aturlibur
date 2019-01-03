import React from "react";

const Input = ({ input }) => {
  return (
    <div className="form-group">
      <label>{input.label}</label>
      <input type={input.type} className="form-control" />
    </div>
  );
};

export default Input;
