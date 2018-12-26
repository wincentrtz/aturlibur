import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import "./home.css";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Favorite from "./Favorite/Favorite";
import Story from "./Story/Story";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <About />
        <Favorite />
        <Story />
      </div>
    );
  }
}

export default Home;
