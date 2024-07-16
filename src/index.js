import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./Style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="App">
      <h1>Weather App</h1>
      <App />
      <footer>
        This project was coded by Rosemary Obioma and is open-sourced on{" "}
        <a
          href="https://github.com/rose912/react.git"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>
        and hosted on{" "}
        <a href="https://netlify.com/rose912" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  </StrictMode>
);
