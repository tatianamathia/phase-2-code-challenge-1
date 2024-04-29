
import React, { useState } from 'react';

const Add = ({ onAddTransaction }) => { // Passing an onAddTransaction prop
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!date || !description || !category || !amount) {
      alert('Please fill in all fields.');
      return;
    }

    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount), // Converting amount to a number for calculations
    };

    onAddTransaction(newTransaction); // Calling prop function with new transaction

    // Clearing th form fields after success
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <input
            type='date' //  date input for better user experience
            placeholder='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder='Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Add;