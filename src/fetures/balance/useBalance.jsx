import { useContext } from "react";
import { BalanceContext } from "./BalanceContext";

function useBalance() {
  return useContext(BalanceContext);
}

export default useBalance;
