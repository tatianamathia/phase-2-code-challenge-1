import React, { useState } from 'react'
import './App.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Add from "./components/add/Add"
import Table from './components/table/Table';
function App() {
  const [transactions, setTransactions] = useState([
    { date: '2019-12-01', description: 'Paycheck from Bob\'s Burgers', category: 'Income', amount: 1000 },
    { date: '2019-12-02', description: 'South by Southwest Quinoa Bowl at Fresh & Co', category: 'Food', amount: -10.35 },
    {date: '2019-12-02', description:'South by Southwest Quinoa Bowl at Fresh & Co' , category: 'Food', amount: -10.55},
    {date:'2019-12-04', description:'Sunglasses by Urban Outfitters', category:'Fashion', amount:'-24.99'},
    {date:'2019-12-06', description:'Alice pays you for Burrito', category:'Food', amount:8.75},
    { date: '2019-12-06', description: 'Chipotle', category: 'Food', amount: -17.594 },
  ]);
  
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      

      <Header />
      <Search />
      <Add onAddTransaction={handleAddTransaction} />
      <Table transactions={transactions}/>


    </div>
  );
}

export default App;
