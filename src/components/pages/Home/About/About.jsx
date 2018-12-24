import React from "react";
import search from "../../../../assets/search.png";
import plan from "../../../../assets/plan.png";
import share from "../../../../assets/share.png";
import wishlist from "../../../../assets/wishlist.png";
import "./about.css";

const About = () => {
  return (
    <div id="about-section">
      <h1 id="about-title" className="mb-4">
        How?
      </h1>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3 mt-3">
          <img src={search} alt="" className="about-item-logo" />
          <h4 className="about-item-description">Cari Lokasi</h4>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt-3">
          <img src={wishlist} alt="" className="about-item-logo" />
          <h4 className="about-item-description">Checklist Lokasi</h4>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt-3">
          <img src={plan} alt="" className="about-item-logo" />
          <h4 className="about-item-description">Atur Liburmu</h4>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt-3">
          <img src={share} alt="" className="about-item-logo" />
          <h4 className="about-item-description">Bagikan Liburanmu</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
