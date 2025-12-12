import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MonthProvider } from "./fetures/month/MonthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MonthProvider>
      <App />
    </MonthProvider>
  </StrictMode>
);
