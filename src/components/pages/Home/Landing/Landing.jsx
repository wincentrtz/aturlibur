import React from "react";
import landing from "../../../../assets/landing.png";
import "./landing.css";
import RoundButton from "../../../common/RoundButton/RoundButton";

const large = {
  padding: "20px 40px"
};

const Landing = () => {
  return (
    <div id="landing-section" className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-5 mt-2" id="landing-motto-section">
          <h1>Atur Libur Anda</h1>
          <h1 className="mb-4">Bersama Kami</h1>
          <RoundButton text={"Get Started"} size={large} />
          <RoundButton text={"Join Us"} size={large} />
        </div>
        <div className="col-12 col-sm-7 mt-2" id="landing-image-section">
          <img src={landing} id="landing-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
