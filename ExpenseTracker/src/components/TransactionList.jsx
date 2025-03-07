import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';
function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => (
          <Transaction key={item.id} item={item}/>
          ))}
      </ul>
    </div>
  );
}

export default TransactionList