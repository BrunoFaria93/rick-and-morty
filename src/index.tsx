import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RickAndMortyProvider } from "./context/RickAndMortyContext";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <RickAndMortyProvider>
      <App />
    </RickAndMortyProvider>
  </React.StrictMode>
);
