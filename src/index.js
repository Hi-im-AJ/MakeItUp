import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import ProductState from "./context/product/ProductState";

ReactDOM.render(
  <React.StrictMode>
    <ProductState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductState>
  </React.StrictMode>,
  document.getElementById("root")
);
