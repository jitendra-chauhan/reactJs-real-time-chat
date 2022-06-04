import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/Chat">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {/* <li className="nav-item active">
        <a className="nav-link" href="/">{props.home} <span className="sr-only"></span></a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/" onClick={props.logOut}>LogOut</a>
      </li>
      
    </ul>
  </div>
</nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string,
  home: PropTypes.string ? PropTypes.string : "home",
  about: PropTypes.string ? PropTypes.string : "about",
  mode: PropTypes.string ? PropTypes.string : "dark",
};

Navbar.defaultPros = {
  title: "enter",
  home: "home",
  about: "about",
};
