import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
setTimeout(() => {
  const nav = document.querySelector("nav");

  console.dir(nav.baseURI);
  nav.classList.remove("nav-colored");

  window.onscroll = function() {
    nav.classList.add("nav-colored");
  };
});
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById("root")
);
