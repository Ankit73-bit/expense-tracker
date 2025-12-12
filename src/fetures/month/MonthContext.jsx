import { createContext } from "react";
import { months } from "../../utils/constant";

const MonthContext = createContext();

const today = new Date();
const initialState = {
  month: months[today.getMonth()],
  date: today.getDate(),
  day: today.getDay(),
  year: today.getFullYear(),
};

function MonthProvider() {}
