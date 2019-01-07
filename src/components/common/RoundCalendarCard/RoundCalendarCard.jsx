import React from "react";
import "./roundCalendarCard.css";
import { Link } from "react-router-dom";

const RoundCalendarCard = ({ query, date }) => {
  return (
    <div className="col-4">
      <div class="card text-center">
        <div class="card-body calendar-card">
          <h1 class="card-title calendar-title">{date.day}</h1>
          <p class="card-text">{date.monthYear}</p>
        </div>
      </div>
    </div>
  );
};

export default RoundCalendarCard;
