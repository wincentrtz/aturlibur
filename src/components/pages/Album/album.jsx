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
    ],
    modal: {
      title: "Add Album",
      id: "album-modal",
      input: [
        {
          label: "Album Name",
          type: "text"
        },
        {
          label: "Album Start Date",
          type: "date"
        },
        {
          label: "Album End Date",
          type: "date"
        },
        {
          label: "Album Picture",
          type: "file"
        }
      ]
    }
  };

  render() {
    const { albums, modal } = this.state;
    return (
      <div className="container">
        <Modal modal={modal} key={modal.id} />
        <h1 id="album-title" className="mt-5 mb-5">
          Your Holiday's Album
        </h1>
        <div className="row">
          <div className="col-sm-4 mb-3">
            <div className="card" id="add-section">
              <img
                className="card-img-top"
                id="plus-image"
                src={plus}
                alt="Card image cap"
                data-toggle="modal"
                data-target={"#" + modal.id}
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
