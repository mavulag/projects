import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CartProvider>
);
