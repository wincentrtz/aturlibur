import React from "react";
import "./roundButton.css";

const style = {
  padding: "10px 20px",
  marginRight: "10px"
};

const RoundButton = ({ text, size }) => {
  return (
    <button className="btn btn-round theme-color" style={style}>
      {text}
    </button>
  );
};

export default RoundButton;
