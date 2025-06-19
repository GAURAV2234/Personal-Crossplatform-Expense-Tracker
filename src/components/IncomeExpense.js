// src/components/IncomeExpense.js
import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionProvider'; // ✅ Correct context

export const IncomeExpense = () => {
  const { filteredTransactions } = useContext(TransactionContext); // ✅ Monthly filtered

  const amounts = filteredTransactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Inflow</h4>
        <p className="money plus">₹{income}</p>
      </div>
      <div>
        <h4>Outflow</h4>
        <p className="money minus">₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};
