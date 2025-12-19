import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MonthProvider } from "./fetures/month/MonthContext.jsx";
import { BalanceProvider } from "./fetures/balance/BalanceContext.jsx";
import { UserProvider } from "./fetures/user/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BalanceProvider>
        <MonthProvider>
          <App />
        </MonthProvider>
      </BalanceProvider>
    </UserProvider>
  </StrictMode>
);
