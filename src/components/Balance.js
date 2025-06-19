import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionProvider'; // ✅ Use the correct context

export const Balance = () => {
  const { transactions } = useContext(TransactionContext); // ✅ Use this, not GlobalContext

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter(amount => amount < 0)
      .reduce((acc, amount) => acc + amount, 0) * -1
  ).toFixed(2);

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1>₹{total}</h1>
      <div className="inc-exp-container">
        <div>
          <h4>INCOME</h4>
          <p className="money plus">₹{income}</p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p className="money minus">₹{expense}</p>
        </div>
      </div>
    </>
  );
};
