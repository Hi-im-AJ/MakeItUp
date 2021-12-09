import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";

import SearchState from "./context/search/SearchState";
import CartState from "./context/cart/CartState";

ReactDOM.render(
  <React.StrictMode>
    <SearchState>
      <CartState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartState>
    </SearchState>
  </React.StrictMode>,
  document.getElementById("root")
);
