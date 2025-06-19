// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMTWqKqfToahQBiilvLST2R_MySeOtQlg",
  authDomain: "expense-tracker-61a72.firebaseapp.com",
  projectId: "expense-tracker-61a72",
  storageBucket: "expense-tracker-61a72.appspot.com",
  messagingSenderId: "265918119403",
  appId: "1:265918119403:web:5ec5850ed36912bb84edae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);

// Delete a single transaction by ID
export const deleteTransaction = async (id) => {
  const db = getFirestore();
  const docRef = doc(db, 'transactions', id);
  await deleteDoc(docRef);
};
