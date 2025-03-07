import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
function Balance() {
  const {transactions } =useContext(GlobalContext)
  const balance = transactions.reduce((acc,curr)=>acc+=curr.amount,0)
  return (
    <div>
      <h1>Balance</h1>
      <h1 id="balance">${balance}</h1>
    </div>
  );
}
export default Balance