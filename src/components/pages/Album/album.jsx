import React, { Component } from "react";
import "./album.css";
import RoundCard from "../../common/RoundCard/RoundCard";
import plus from "../../../assets/plus.png";
import Modal from "../../common/Modal/Modal";
import { getAlbums, createAlbum } from "../../../services/user/albumService";
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
      button : "Create Album",
      input: [
        {
          label: "Album Name",
          type: "text",
          id: "trip_name"
        },
        {
          label: "Album Start Date",
          type: "date",
          id: "trip_start_date"
        },
        {
          label: "Album End Date",
          type: "date",
          id: "trip_end_date"
        },
        {
          label: "Album Location",
          type: "text",
          id: "trip_location"
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

  handleCreateAlbum = async() => {
    this.setState({loading: true})
    const {data:album} = await createAlbum(this.state.data);
    if(album != null){
      const albums = this.state.albums;
      albums.push({
        trip_name : album.data.trip_name,
        trip_start_date : album.data.trip_start_date,
        trip_end_date : album.data.trip_end_date,
        trip_location : album.data.trip_location
      })
      this.setState({albums, loading:false});
    }
    
  };

  handleAlbumFormChange = (e) => {
    const data = { ...this.state.data };
    data[e.target.id] = e.target.value;
    this.setState({ data });
  };

  render() {
    const { albums, modal, loading,data } = this.state;
    console.log(data);
    return (
      <div className="container">
        <Modal
          onPost={this.handleCreateAlbum}
          onChange={this.handleAlbumFormChange}
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
