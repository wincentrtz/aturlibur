import React, { Component } from "react";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import { getAlbumDetail } from "../../../services/user/albumService";
import RoundCalendarCard from "../../common/RoundCalendarCard/RoundCalendarCard";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 200px;
  border-color: red;
`;

class Plan extends Component {
  state = {
    loading: true,
    album: {}
  };

  async componentDidMount() {
    const query = this.props.match.params.name;
    const { data: album } = await getAlbumDetail(query);
    if (album) {
      let date = new Date(album.data.trip_start_date);
      album["data"]["calendar"] = [];
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let formatDay = date.getDate();
      let formatDate = monthNames[date.getMonth()] + " " + date.getFullYear();
      let formatPush = {
        day: formatDay,
        monthYear: formatDate
      };
      album["data"]["calendar"].push(formatPush);

      for (let i = 0; i < album.data.range; i++) {
        date.setDate(date.getDate() + 1);
        formatDay = date.getDate();
        formatDate = monthNames[date.getMonth()] + " " + date.getFullYear();
        let formatPush = {
          day: formatDay,
          monthYear: formatDate
        };
        album["data"]["calendar"].push(formatPush);
      }
      this.setState({ album: album.data, loading: false });
    }
  }

  render() {
    const { album, loading } = this.state;
    return (
      <div className="container-fluid">
        {loading ? (
          <BounceLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"#0288d1"}
            loading={this.state.loading}
          />
        ) : (
          <div className="row">
            <div className="col-9">
              <h3 className="text-center mt-5 mb-5">{album.trip_name}</h3>
              <div className="row">
                {album.calendar.map(date => (
                  <RoundCalendarCard
                    query={this.props.match.params.name}
                    date={date}
                  />
                ))}
              </div>
            </div>
            <div className="col-3 mt-5">
              <h2>Wishlist</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Plan;
