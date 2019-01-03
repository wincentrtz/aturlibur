import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import City from "./components/pages/City/City";
import Plan from "./components/pages/Plan/Plan";
import Album from "./components/pages/Album/album";
import Modal from "./components/common/Modal/Modal";

class App extends Component {
  state = {
    modal: {
      title: "Join Our Adventure~!",
      id: "login-modal",
      input: [
        {
          label: "Email",
          type: "email"
        },
        {
          label: "Password",
          type: "password"
        }
      ]
    }
  };
  render() {
    const { modal } = this.state;
    return (
      <React.Fragment>
        <Navbar modal={modal} />
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
