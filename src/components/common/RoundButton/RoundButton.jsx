import React from "react";
import "./roundButton.css";

const RoundButton = ({ text, size }) => {
  return (
    <button className="btn btn-round theme-color" style={{ padding: size }}>
      {text}
    </button>
  );
};

export default RoundButton;
