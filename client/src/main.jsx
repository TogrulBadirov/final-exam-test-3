import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { HelmetProvider } from "react-helmet-async";
import WishlistProvider from "./context/WishlistContext.jsx";
import BasketProvider from "./context/BasketContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </HelmetProvider>
  </React.StrictMode>
);
