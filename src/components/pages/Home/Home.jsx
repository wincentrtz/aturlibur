import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import "./home.css";
import Landing from "./Landing/Landing";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default Home;
