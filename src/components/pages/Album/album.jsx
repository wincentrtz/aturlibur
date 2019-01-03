import React, { Component } from "react";
import "./album.css";
import RoundCard from "../../common/RoundCard/RoundCard";
import plus from "../../../assets/plus.png";
import Modal from "../../common/Modal/Modal";

class Album extends Component {
  state = {
    albums: [
      {
        title: "Event 3",
        date: "31 December 2018"
      },
      {
        title: "Event 2",
        date: "27 December 2018"
      },
      {
        title: "Event 1",
        date: "21 December 2018"
      }
    ]
  };

  render() {
    const { albums } = this.state;
    return (
      <div className="container">
        <Modal />
        <h1 id="album-title" className="mt-5 mb-5">
          Your Holiday's Album
        </h1>
        <div className="row">
          <div class="col-sm-4 mb-3">
            <div class="card" id="add-section">
              <img
                class="card-img-top"
                id="plus-image"
                src={plus}
                alt="Card image cap"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              />
            </div>
          </div>
          {albums.map(album => (
            <RoundCard card={album} />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
