import http from "../httpService";
import config from "../../config.json";

export function getAlbums() {
  return http.get(config.apiUrl + "/trip");
}

export function createAlbum(trip) {
  return http.post(config.apiUrl + "/trip", {
    trip_name: trip.trip_name,
    trip_start_date: trip.trip_start_date,
    trip_end_date: trip.trip_end_date,
    trip_location: trip.trip_location
  });
}

export function getAlbumDetail(name) {
  return http.get(config.apiUrl + "/trip/" + name);
}
