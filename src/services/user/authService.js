import http from "../httpService";
import config from "../../config.json";

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem("user_token");
}
export function loginWithJwt(jwt) {
  localStorage.setItem("user_token", jwt);
}

export async function userLogin(email, password) {
  const { data } = await http.post(config.apiUrl + "/login", {
    email: email,
    password: password
  });
  localStorage.setItem("user_token", data.token);
}

export function logout() {
  localStorage.removeItem("user_token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("user_token");
    return jwt;
  } catch (ex) {
    return null;
  }
}

export default {
  userLogin,
  getCurrentUser,
  logout,
  loginWithJwt,
  getJwt
};
