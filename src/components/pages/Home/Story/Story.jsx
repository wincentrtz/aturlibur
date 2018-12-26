import React from "react";

import Slider from "react-slick";
import story from "../../../../assets/story.jpg";
import selfie from "../../../../assets/selfie.jpg";
import "./story.css";
import RoundImage from "../../../common/RoundImage/RoundImage";

const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  pauseOnHover: false
};

const rowStyle = {
  display: "flex"
};

const Story = ({ story }) => {
  return (
    <div className="container" id="story-section">
      <h1 id="story-title">Everyone's Story</h1>
      <Slider {...settings}>
        {story.map(item => (
          <div key={item.title} className="row slider-row">
            <div className="col-6">
              <RoundImage image={item.image} />
            </div>
            <div className="col-6" id="story-sliders">
              <div className="story-description">
                <h2 className="story-name">{item.title}</h2>
                <h4 className="mb-4">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </h4>
                <h5>{item.description}</h5>
                <h6 className="learn-more mt-4">Learn More</h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Story;
