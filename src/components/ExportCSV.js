// src/components/ExportCSV.js
import React, { useContext } from 'react';
import { TransactionContext } from '../TransactionProvider';

export const ExportCSV = () => {
  const { filteredTransactions } = useContext(TransactionContext);

  const downloadCSV = () => {
    const headers = ['Text', 'Amount', 'Date'];
    const rows = filteredTransactions.map(t =>
      [t.text, t.amount, new Date(t.date).toLocaleDateString()]
    );

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `transactions-${new Date().getMonth() + 1}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn" onClick={downloadCSV}>
      📁 Export CSV
    </button>
  );
};
