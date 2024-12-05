import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// Faqat index.js faylida Router (BrowserRouter) ishlatiladi
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
