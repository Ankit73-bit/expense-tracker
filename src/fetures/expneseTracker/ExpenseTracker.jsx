import Month from "../month/Month";
import Balance from "../balance/Balance";
import Transactions from "../transaction/Transactions";
import Profile from "../user/Profile";

function ExpenseTracker() {
  return (
    <>
      <div>
        <Profile />
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
