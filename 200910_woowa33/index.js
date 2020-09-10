import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const sessionList = [
  { title: "1회차: ", order: 1 },
  { title: "2회차: ", order: 1 },
  { title: "3회차: ", order: 1 },
  { title: "4회차: ", order: 1 }
];
ReactDOM.render(
  <React.StrictMode>
    <App store={{ sessionList }} />
  </React.StrictMode>,
  rootElement
);