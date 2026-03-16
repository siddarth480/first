import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CouterProvider } from "./context/Counter.jsx";
import { CartProvider } from "./context/cart.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CouterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CouterProvider>
    </StrictMode>
  </BrowserRouter>,
);
