import React, { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import "./home.css";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Favorite from "./Favorite/Favorite";
import Story from "./Story/Story";
import Footer from "./Footer/footer";

class Home extends Component {
  state = {
    story: [
      {
        image: "story",
        title: "Bali Expedition 1",
        description:
          "Bali is an awesome place where you can chill and forget all your exhausted day. Hopefully my trip can suite with what you want."
      },
      {
        image: "selfie",
        title: "Jogjakarta Expedition 2",
        description:
          "Jogjakarta is an awesome place where you can chill and forget all your exhausted day. Hopefully my trip can suite with what you want."
      }
    ]
  };
  render() {
    const { story } = this.state;
    return (
      <div>
        <Landing />
        <About />
        <Favorite />
        <Story story={story} />
        <Footer />
      </div>
    );
  }
}

export default Home;
