import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./pages/Main";
import "./main.less";
import "./assets/font/font.less";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
