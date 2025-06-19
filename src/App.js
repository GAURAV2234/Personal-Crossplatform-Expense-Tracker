import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { ResetButton } from './components/ResetButton'; // ✅ import the reset button
import { MonthFilter } from './components/MonthFilter';
import { ExportCSV } from './components/ExportCSV'; // ✅ Import CSV button

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <MonthFilter /> {/* ✅ Add this line here */}
        <TransactionList />
        <AddTransaction />
        <ResetButton />
        <ExportCSV /> 
      </div>
    </div>
  );
}


export default App;
