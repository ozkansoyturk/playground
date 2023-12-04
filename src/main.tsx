import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
