import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Chat from "./pages/Chat";
import reportWebVitals from "./reportWebVitals";
import LogOut from "./pages/LogOut";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        {/* <Route index element={<App />} /> */}
        <Route path="App" element={<App />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Chat/:id" element={<Chat />} />
      <Route path="LogOut" element={<LogOut />} />
    </Routes>
    {/* <Redriect from='/SignUp' to="/Chat" /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
