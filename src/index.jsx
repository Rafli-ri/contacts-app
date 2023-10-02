// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContactApp from "./ContactApp";
import "./styles/style.css";
import Routes from "./routes";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);
