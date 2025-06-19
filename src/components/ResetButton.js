// src/components/ResetButton.js
import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionProvider';

export const ResetButton = () => {
  const { deleteAllTransactions } = useContext(TransactionContext);

  const handleReset = () => {
    const confirmReset = window.confirm("Are you sure you want to delete all transactions?");
    if (confirmReset) {
      deleteAllTransactions();
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleReset} style={{ marginTop: '20px', backgroundColor: '#e74c3c' }}>
      🔄 Reset All Transactions
    </button>
  );
};
