import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Income() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, curr) => (acc += curr.amount), 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, curr) => (acc += curr.amount), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${expense}
        </p>
      </div>
    </div>
  );
}

export default Income;


