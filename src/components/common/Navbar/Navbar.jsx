import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">AturLibur</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <ul className="navbar-nav form-inline my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Favorites</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Stories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Feedback</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
