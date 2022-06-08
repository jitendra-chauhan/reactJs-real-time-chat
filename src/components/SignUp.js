// ---------------- jitendra ---------------- //
// ---------------- chauhan ---------------- //
// ------------ React Chat App ------------- //

import React from "react";
import logo from "../logo.svg";

export default function SignUp(props) {
  return (
    <div className="wrapper">
    <div className="logo">
        <img src={logo} alt="logo" />
    </div>
    <div className="text-center mt-4 name">
        chat App
    </div>
    <form className="p-3 mt-3" onSubmit={props.handleSubmit} >
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="userName" id="userName" onChange={e => props.setUserName(e.target.value)} placeholder="Username" required/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="password" id="pwd" onChange={e => props.setPassword(e.target.value)} placeholder="Password" required/>
        </div>
            {props.renderErrorMessage("pass")}
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password" name="re-password" id="re-pwd" onChange={e => props.setRePassword(e.target.value)} placeholder="re-Password" required/>
        </div>
        <button type="submit" className="btn mt-3">Sign Up</button>
    </form>
    <div className="text-center fs-6">
        <a href="/">Forget password?</a> or <a href="/">Sign in</a>
    </div>
</div>
  );
}