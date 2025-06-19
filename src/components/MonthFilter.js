import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionProvider';

export const MonthFilter = () => {
  const { selectedMonth, setSelectedMonth } = useContext(TransactionContext);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleChange = (e) => {
    setSelectedMonth(parseInt(e.target.value)); // 0-indexed
  };

  return (
    <div className="month-filter">
      <label>Select Month: </label>
      <select value={selectedMonth} onChange={handleChange}>
        {months.map((month, index) => (
          <option key={index} value={index}>{month}</option>
        ))}
      </select>
    </div>
  );
};
