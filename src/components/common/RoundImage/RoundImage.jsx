import React from "react";
import "./roundImage.css";

const RoundImage = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img
        src={require("../../../assets/" + image + ".jpg")}
        className="image-round"
      />
    </div>
  );
};

export default RoundImage;
