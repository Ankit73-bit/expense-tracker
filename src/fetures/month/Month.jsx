import { useState } from "react";
import { months } from "../../utils/constant";

function Month() {
  const today = new Date();
  const [month, setMonth] = useState(months[today.getMonth()]);

  return (
    <>
      <select onChange={(e) => setMonth(e.target.value)} value={month}>
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
