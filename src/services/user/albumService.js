import http from "../httpService";
import config from "../../config.json";

export function getAlbums() {
  return http.get(config.apiUrl + "/trip");
}

export function createAlbum(user) {
  return http.post(config.apiUrl + "/trip", {
    trip_name: user.name,
    trip_start_date: user.email,
    trip_end_date: user.phone,
    trip_location: user.password
  });
}

export function getAlbumDetail(name) {
  return http.get(config.apiUrl + "/trip/" + name);
}
