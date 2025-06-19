import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionProvider';

export const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useContext(TransactionContext);

  return (
    <div className="form-control">
      <label>Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};
