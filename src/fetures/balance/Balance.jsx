import useBalance from "./useBalance";

function Balance() {
  const { balance } = useBalance();
  return (
    <>
      <div>
        <p>Balance</p>
        <p>{balance.amount} rs</p>
        <p>as on {balance.date}</p>
      </div>
    </>
  );
}

export default Balance;
