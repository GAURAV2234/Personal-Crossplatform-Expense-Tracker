import React, { createContext, useEffect, useState } from 'react';
import {
  addTransaction,
  deleteTransaction as fbDeleteTransaction,
  updateTransaction,
  subscribeToTransactions
} from './firebaseService';
import { db } from './firebase';
import { collection, getDocs, writeBatch } from 'firebase/firestore';

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeToTransactions((data) => {
      setTransactions(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filtered = transactions.filter((t) => {
      const date = t.date ? new Date(t.date) : null;
      return date && date.getMonth() === selectedMonth;
    });
    setFilteredTransactions(filtered);
  }, [transactions, selectedMonth]);

  const addNewTransaction = async (transaction) => {
    await addTransaction(transaction);
  };

  const deleteAllTransactions = async () => {
    const querySnapshot = await getDocs(collection(db, 'transactions'));
    const batch = writeBatch(db);
    querySnapshot.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
    console.log("All transactions deleted.");
  };

  const removeTransaction = async (id) => {
    await fbDeleteTransaction(id);
  };

  return (
    <TransactionContext.Provider
  value={{
    transactions,
    filteredTransactions, // ✅ add this
    addTransaction: addNewTransaction,
    deleteAllTransactions,
    deleteTransaction: removeTransaction,
    updateTransaction,
    selectedMonth,              // optional: for filter UI
    setSelectedMonth,           // optional: for filter UI
  }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
