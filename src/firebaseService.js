// src/firebaseService.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';

// Constants
const COLLECTION_NAME = 'transactions';
const transactionsRef = collection(db, COLLECTION_NAME);

// ✅ Add a transaction
export const addTransaction = async (transaction) => {
  try {
    const docRef = await addDoc(transactionsRef, transaction);
    console.log("Transaction written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding transaction: ", e);
  }
};

// ✅ Get all transactions once
export const getTransactions = async () => {
  const querySnapshot = await getDocs(transactionsRef);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// ✅ Subscribe to real-time transaction updates
export const subscribeToTransactions = (callback) => {
  return onSnapshot(transactionsRef, (snapshot) => {
    const transactions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(transactions);
  });
};

// ✅ Delete a single transaction
export const deleteTransaction = async (id) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
};

// ✅ Update a transaction
export const updateTransaction = async (id, updatedData) => {
  const transactionDoc = doc(db, COLLECTION_NAME, id);
  await updateDoc(transactionDoc, updatedData);
};
