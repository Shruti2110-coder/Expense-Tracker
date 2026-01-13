import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () =>{
  const [transactions, setTransactions] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:3000/api/transactions")
      .then(res => setTransactions(res.data))
      .catch(err=> console.log(err))

  },[]);

  const addTransaction = (transaction) => {
    axios.post("http://localhost:3000/api/transactions", transaction)
      .then(res => setTransactions([...transactions, res.data]))
      .catch(err => console.log(err))
  }



  return (
<div className='container'>
  <h1>EXPENSE TRACKER</h1>
  <Balance transactions = {transactions}/>
  <Transaction transactions = {transactions} />
  <AddTransaction addTransaction={addTransaction}/>
</div>
  );
}

export default App;
