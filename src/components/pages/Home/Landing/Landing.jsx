import React from "react";
import landing from "../../../../assets/landing.png";
import "./landing.css";

const Landing = () => {
  return (
    <div id="landing-section" className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-5 mt-2" id="landing-motto-section">
          <h1>Atur Libur Anda</h1>
          <h1>Bersama Kami</h1>
          <button className="btn btn-theme">Login</button>
        </div>
        <div className="col-12 col-sm-7 mt-2" id="landing-image-section">
          <img src={landing} id="landing-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
