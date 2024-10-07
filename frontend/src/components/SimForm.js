// src/components/SimForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SimForm = ({ fetchSims }) => {
  const [sim_number, setSim_number] = useState('');
  const [phone_number, setPhone_number] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting SIM:", { sim_number, phone_number }); // Log the values before submitting

    try {
        // Check if the fields are populated
        if (!sim_number || !phone_number) {
            throw new Error("Both fields are required.");
        }
        
        await axios.post('http://localhost:5000/api/sims', { sim_number, phone_number });
        fetchSims(); // Refresh the list after adding a new SIM
        setSim_number('');
        setPhone_number('');
    } catch (error) {
        console.error("Error creating SIM card:", error.response ? error.response.data : error.message);
    }
};
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New SIM Card</h2>
      <input
        type="text"
        placeholder="SIM Number"
        value={sim_number}
        onChange={(e) => setSim_number(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone_number}
        onChange={(e) => setPhone_number(e.target.value)}
        required
      />
      <button type="submit">Add SIM</button>
    </form>
  );
};

export default SimForm;
