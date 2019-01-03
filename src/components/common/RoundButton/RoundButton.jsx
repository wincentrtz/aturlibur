import React from "react";
import "./roundButton.css";

const RoundButton = ({ text, size, id }) => {
  return (
    <button
      className="btn btn-round theme-color"
      style={{ padding: size }}
      data-toggle="modal"
      data-target={"#" + id}
    >
      {text}
    </button>
  );
};

export default RoundButton;
