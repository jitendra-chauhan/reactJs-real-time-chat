import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import LoginComp from "../components/Login";
import { URL } from "../common/constants";

function Login() {
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
 
  console.log("sessionStorage.getItem(id) ::", sessionStorage.getItem("id"));
  async function loginUser(credentials) {
    return fetch(`${URL.API}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    console.log("==> login <===", token);
    if (token.flag) {
      sessionStorage.setItem("id", token.data._id);
      navigate(`/Chat/${sessionStorage.getItem("id")}`);
      console.log(
        "sessionStorage.getItem(id) ::",
        sessionStorage.getItem("id")
      );
    } else {
      alert(token.msg);
    }
  };

  return (
    <>
      <LoginComp
        logo={logo}
        setUserName={setUserName}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
