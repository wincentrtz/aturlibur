import React from "react";

import Slider from "react-slick";
import story from "../../../../assets/story.jpg";
import selfie from "../../../../assets/selfie.jpg";
import "./story.css";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  pauseOnHover: false
};

const Story = () => {
  return (
    <div className="container" id="story-section">
      <h1 id="story-title">Everyone's Story</h1>
      <div className="row">
        <div className="col-6">
          <Slider {...settings}>
            <div>
              <img src={story} className="image-slider" />
            </div>
            <div>
              <img src={selfie} className="image-slider" />
            </div>
            <div>
              <img src={story} className="image-slider" />
            </div>
            <div>
              <img src={selfie} className="image-slider" />
            </div>
            <div>
              <img src={story} className="image-slider" />
            </div>
          </Slider>
        </div>
        <div className="col-6" id="story-sliders">
          <Slider {...settings}>
            <div className="story-description">
              <h2>MY TRIP TO BALI</h2>
              <h4>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </h4>
              <h4>
                Bali is an awesome place where you can chill and forget all your
                exhausted day. Hopefully my trip can suite with what you want.
              </h4>
            </div>
            <div className="story-description">
              <h2>MY TRIP TO BALI 2</h2>
              <h4>
                <h4>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </h4>
                Bali is an awesome place where you can chill and forget all your
                exhausted day. Hopefully my trip can suite with what you want.
              </h4>
            </div>
            <div className="story-description">
              <h2>MY TRIP TO BALI</h2>
              <h4>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </h4>
              <h4>
                Bali is an awesome place where you can chill and forget all your
                exhausted day. Hopefully my trip can suite with what you want.
              </h4>
            </div>
            <div className="story-description">
              <h2>MY TRIP TO BALI 2</h2>
              <h4>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </h4>
              <h4>
                Bali is an awesome place where you can chill and forget all your
                exhausted day. Hopefully my trip can suite with what you want.
              </h4>
            </div>
            <div className="story-description">
              <h2>MY TRIP TO BALI</h2>
              <h4>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </h4>
              <h4>
                Bali is an awesome place where you can chill and forget all your
                exhausted day. Hopefully my trip can suite with what you want.
              </h4>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Story;
