import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function Transaction({item}) {
  const {deleteTransaction} =useContext(GlobalContext)
  const sign= item.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={sign=='-'?"minus":"plus"} key={Math.random() * 100000000}>
        {item.text} <span>{sign}${Math.abs(item.amount)}</span>{" "}
        <button className="delete-btn" onClick={()=>deleteTransaction(item.id)}>X</button>
      </li>
    </div>
  );
}
export default Transaction 