import { months } from "../../utils/constant";
import { useMonth } from "./MonthContext";

function Month() {
  const { state, dispatch } = useMonth();

  return (
    <>
      <select
        onChange={(e) =>
          dispatch({ type: "SET_MONTH", payload: e.target.value })
        }
        value={state.month}
      >
        {months.map((mon, i) => {
          return (
            <option key={i} value={mon}>
              {mon}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Month;
