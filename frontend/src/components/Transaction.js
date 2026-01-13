function Transaction({ transactions }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.desc} - {t.amount} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transaction;
