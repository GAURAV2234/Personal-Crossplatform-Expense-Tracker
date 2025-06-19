// src/components/TransactionList.js
import React, { useContext, useState } from 'react';
import { TransactionContext } from '../TransactionProvider';

export const TransactionList = () => {
  const {
    filteredTransactions,         // ✅ Use filtered transactions only
    deleteTransaction,
    updateTransaction
  } = useContext(TransactionContext);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [editAmount, setEditAmount] = useState('');

  const startEdit = (transaction) => {
    setEditingId(transaction.id);
    setEditText(transaction.text);
    setEditAmount(transaction.amount);
  };

  const saveEdit = () => {
    updateTransaction(editingId, {
      text: editText,
      amount: +editAmount,
    });
    setEditingId(null);
    setEditText('');
    setEditAmount('');
  };

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {filteredTransactions.map((transaction) => (
          <li key={transaction.id}>
            {editingId === transaction.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <input
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                />
                <button onClick={saveEdit}>💾</button>
              </>
            ) : (
              <>
                {transaction.text} <span>{transaction.amount} ₹</span>
                <button onClick={() => startEdit(transaction)}>✏️</button>
                <button onClick={() => deleteTransaction(transaction.id)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
