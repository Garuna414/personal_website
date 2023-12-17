import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
//import LeftSide from "./components/leftSide";
//import AboutMe from "./components/aboutMe";
//import Contact from "./components/contact";
//import Projects from "./components/projects";
//import NavBar from "./navBar";
//import School from "./school";
//import Home from "./home";
import reportWebVitals from "./reportWebVitals";
import { hydrate, render } from "react-dom";
//import Links from "./contact";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
