import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom"; // use HashRouter for GitHub Pages
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
