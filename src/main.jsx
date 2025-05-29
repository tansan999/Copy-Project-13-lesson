import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BasketProvider } from "./store/BasketProvaider.jsx";

createRoot(document.getElementById("root")).render(
  // оборачивем useContext через  <BasketProvider> на верх <App />
  <BasketProvider>
    <App />
  </BasketProvider>
);
