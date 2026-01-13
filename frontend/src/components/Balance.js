import React from 'react'

function Balance({ transactions }) {
    let  income = 0;
    let expanse = 0;
   

     transactions.forEach(t => {
        if(t.type === "income") income += t.amount;
        else expanse += t.amount;
     });
  return (
    <h2>Balance: {income - expanse}</h2>
  )
}

export default Balance