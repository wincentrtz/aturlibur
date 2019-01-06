import React, { Component } from "react";
import "./album.css";
import RoundCard from "../../common/RoundCard/RoundCard";
import plus from "../../../assets/plus.png";
import Modal from "../../common/Modal/Modal";
import { getAlbums } from "../../../services/user/albumService";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  border-color: red;
`;

class Album extends Component {
  state = {
    albums: [],
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
          label: "Album Location",
          type: "text"
        }
      ]
    },
    data: {
      trip_name: "",
      trip_start_date: "",
      trip_end_date: "",
      trip_location: ""
    },
    loading: true
  };

  async componentDidMount() {
    const { data: albums } = await getAlbums();
    if (albums) {
      this.setState({ albums: albums.data, loading: false });
    }
  }

  handleCreateAlbum = () => {};

  handleAlbumFormChange = () => {};

  render() {
    const { albums, modal, loading } = this.state;
    console.log(albums);
    return (
      <div className="container">
        <Modal
          onCreateAlbum={this.handleCreateAlbum}
          modal={modal}
          key={modal.id}
        />
        {loading ? (
          <BounceLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"#0288d1"}
            loading={this.state.loading}
          />
        ) : (
          <div>
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
        )}
      </div>
    );
  }
}

export default Album;
