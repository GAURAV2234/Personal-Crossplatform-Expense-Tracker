import React, { useState, useContext } from 'react';
import { TransactionContext } from '../TransactionProvider';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(TransactionContext);
  const [category, setCategory] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    await addTransaction({
      text,
      amount: +amount,
      category,
      date: new Date().toISOString(),
    });

    setText('');
    setAmount('');
    setCategory('');
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Groceries"
          />
        </div>

        <div className="form-control">
          <label>Amount (negative = expense, positive = income)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. -500"
          />
        </div>

        <div className="form-control">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select Category--</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
