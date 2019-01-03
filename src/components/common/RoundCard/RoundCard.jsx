import React from "react";
import image from "../../../assets/sunrise.jpg";
import "./roundCard.css";

const RoundCard = ({ card }) => {
  return (
    <div class="col-sm-4 mb-3">
      <div class="card">
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{card.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{card.date}</h6>
        </div>
      </div>
    </div>
  );
};

export default RoundCard;
