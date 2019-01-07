import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import { userLogin } from "./services/user/authService";
import Navbar from "./components/common/Navbar/Navbar";
import City from "./components/pages/City/City";
import Plan from "./components/pages/Plan/Plan";
import Album from "./components/pages/Album/Album";

class App extends Component {
  state = {
    modal: {
      title: "Join Our Adventure~!",
      id: "login-modal",
      button: "Login",
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
    },
    login: {
      email: "",
      password: ""
    },
    status: false
  };

  componentDidMount = () => {
    const token = localStorage.getItem("user_token");
    if (token) {
      const status = true;
      this.setState({ status });
    }
  };

  handlePost = async () => {
    const response = await userLogin(
      this.state.login.email,
      this.state.login.password
    );
    this.setState({ login: true });
    window.location = "/album";
  };

  handleChange = e => {
    const login = { ...this.state.login };
    login[e.target.type] = e.target.value;
    this.setState({ login });
  };

  handleLogout = () => {
    localStorage.removeItem("user_token");
    const status = false;
    this.setState({ status });
    window.location = "/";
  };

  render() {
    const { modal, status } = this.state;
    return (
      <React.Fragment>
        <Navbar
          modal={modal}
          onChange={this.handleChange}
          onPost={this.handlePost}
          status={status}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/plan/:name" component={Plan} />
          <Route exact path="/album" component={Album} />
          <Route exact path="/location" component={City} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
