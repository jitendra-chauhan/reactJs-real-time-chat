import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import LoginComp from "../components/Login";
import { URL } from "../common/constants";

function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // React.useEffect(() => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({name:"hi",password:"me"})
  // };

  //   fetch("http://localhost:3003/signUp",requestOptions)
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log('result',result);

  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  // })
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
      setToken(token);
      navigate(`/Chat/${sessionStorage.getItem("id")}`);
      console.log(
        "sessionStorage.getItem(id) ::",
        sessionStorage.getItem("id")
      );
    } else {
      alert(token.msg);
    }
    // navigate("/Chat");
  };

  return (
    <>
      {/* <Navbar title="Login Page"/> */}
      <LoginComp
        logo={logo}
        setUserName={setUserName}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Login;
