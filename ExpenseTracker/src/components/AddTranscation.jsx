import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
function AddTranscation() {
 const [text,setText]=useState('')
 const [amount,setAmount]=useState(0)

 const {addTransaction} =useContext(GlobalContext)

  const handleText=(e)=>{
    setText(e.target.value)
  }
  const handleAmount=(e)=>{
    setAmount(Number(e.target.value))
    console.log(typeof(amount))
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    const newTransaction={
      id:Math.random()*1000000,
      text,
      amount
    }
    setAmount(0)
    setText('')
    addTransaction(newTransaction);
  }
  return (
    <div>
      <h3>Add new Transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleText} id="text" placeholder="Enter text .." />
        </div>
        <div className='form-control'>
            <label htmlFor="amount">
              Amount <br />negative -expense <br /> positive -income
            </label>
            <input type="number" value={amount} onChange={handleAmount}  placeholder='Enter Amount...' />
        </div>
            <button  className='btn'>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTranscation