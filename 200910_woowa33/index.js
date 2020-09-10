import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const sessionList = [
  { title: "1회차: Overview", order: 1 },
  { title: "2회차: Redux 만들기", order: 2 },
  { title: "3회차: React 만들기", order: 3 },
  { title: "4회차: 컴포넌트 디자인 및 비동기", order: 4 }
];
ReactDOM.render(
  <React.StrictMode>
    <App store={{ sessionList }} />
  </React.StrictMode>,
  rootElement
);
