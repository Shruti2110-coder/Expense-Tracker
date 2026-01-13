import React, { useState } from 'react'

function AddTransaction({ addTransaction }) {
    const[amount, setAmount] = useState("");
    const[desc, setDesc] = useState("");
    const[type, setType] = useState("income");

    const submit = (e) => {
         e.preventDefault();
        addTransaction({
            amount: Number(amount),
            desc,
            type: type
        }); 

            setDesc("");
    setAmount("");
    };
  return (
   <div>
    <input
     placeholder="description" 
        value={desc}
     onChange={(e) => setDesc(e.target.value)}
     />

    <input 
    placeholder='Amount'
    value={amount}
     onChange={(e) => setAmount(e.target.value)}
     />

    <select value={type} onChange={e => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
    </select>

    <button onClick={submit}>Add transaction</button>

   </div>
  )
}

export default AddTransaction;