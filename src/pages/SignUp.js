import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import SignUpComp from "../components/SignUp";
import { URL } from "../common/constants";

function SignUp() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [token, setToken] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  async function signUpUser(credentials) {
    return fetch(`${URL.API}signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      return setErrorMessages({
        name: "pass",
        message: "password is not match",
      });
    } else {
      setErrorMessages({ name: "pass", message: "" });
    }
    const token = await signUpUser({
      username,
      password,
    });
    console.log(token);
    setToken(token);
    navigate("/Chat");
  };

  return (
    <>
      <SignUpComp
        logo={logo}
        setUserName={setUserName}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        setRePassword={setRePassword}
        renderErrorMessage={renderErrorMessage}
      />
    </>
  );
}

export default SignUp;
