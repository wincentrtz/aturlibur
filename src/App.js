import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import City from "./components/pages/City/City";
import Plan from "./components/pages/Plan/Plan";
import Album from "./components/pages/Album/album";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/album" component={Album} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/location" component={City} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
