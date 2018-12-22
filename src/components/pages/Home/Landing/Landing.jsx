import React from "react";
import landing from "../../../../assets/landing.png";
import "./landing.css";

const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6" id="landing-motto">
          <h1>Atur Libur Anda</h1>
          <h1>Bersama Kami</h1>
          <button class="btn btn-theme">Login</button>
        </div>
        <div className="col-6">
          <img src={landing} id="landing-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
