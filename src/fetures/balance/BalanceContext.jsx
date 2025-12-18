import { createContext, useState } from "react";

const BalanceContext = createContext();

function BalanceProvider({ children }) {
  const [balance, setBalance] = useState({
    amount: 0,
    date: new Date().toLocaleString(),
  });

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
}

export { BalanceContext, BalanceProvider };
