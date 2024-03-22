import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreCongtextProvider from "./Components/Context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreCongtextProvider>
      <App />
    </StoreCongtextProvider>
  </BrowserRouter>
);
