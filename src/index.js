import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TransactionProvider from './TransactionProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionProvider> {/* ✅ Wrap your app */}
    <App />
  </TransactionProvider>
);
