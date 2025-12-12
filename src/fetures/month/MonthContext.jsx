import { createContext, useContext, useReducer } from "react";
import { months } from "../../utils/constant";

const MonthContext = createContext();

const today = new Date();
const initialState = {
  month: months[today.getMonth()],
  date: today.getDate(),
  day: today.getDay(),
  year: today.getFullYear(),
};

function monthReducer(state, action) {
  switch (action.type) {
    case "SET_MONTH":
      return { ...state, month: action.payload };
    default:
      return state;
  }
}

function MonthProvider({ children }) {
  const [state, dispatch] = useReducer(monthReducer, initialState);

  return (
    <MonthContext.Provider value={{ state, dispatch }}>
      {children}
    </MonthContext.Provider>
  );
}

function useMonth() {
  return useContext(MonthContext);
}

export { MonthContext, MonthProvider, useMonth };
