import React from "react";
import image from "../../../assets/sunrise.jpg";
import "./roundCard.css";

const RoundCard = ({ card }) => {
  return (
    <div className="col-sm-4 mb-3">
      <div className="card ">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h5 className="card-title">{card.trip_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {card.trip_start_date}
              </h6>
            </div>
            <div className="col-4">
              <button className="btn btn-primary">Check</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundCard;
