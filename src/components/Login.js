// ---------------- jitendra ---------------- //
// ---------------- chauhan ---------------- //
// ------------ React Chat App ------------- //
import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";

export default function Login(props) {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="text-center mt-4 name">chat App</div>
      <form className="p-3 mt-3" onSubmit={props.handleSubmit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => props.setUserName(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            onChange={(e) => props.setPassword(e.target.value)}
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn mt-3">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="/">Forget password?</a> or <a href="/SignUp">Sign up</a>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
