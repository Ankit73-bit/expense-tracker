import Month from "../month/Month";
import Balance from "../balance/Balance";
import Transactions from "../transaction/Transactions";
import User from "../user/User";

function ExpenseTracker() {
  return (
    <>
      <div>
        <User />
      </div>
      {/* <div>
        <Balance />
        <Month />
        <Transactions />
      </div> */}
    </>
  );
}

export default ExpenseTracker;
