// import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { UserProvider } from "./store/FetchUser-Context.jsx";
import { UserProviderNew } from "./store/fetchNew-context.jsx";
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProviderNew>
    <App />
  </UserProviderNew>
  // </StrictMode>
);
