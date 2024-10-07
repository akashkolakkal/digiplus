import React, { useState } from 'react';
import axios from 'axios';

const SimForm = ({ fetchSims }) => {
  const [simNumber, setSimNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting SIM:", { simNumber, phoneNumber }); 

    try {
        
        if (!simNumber || !phoneNumber) {
            throw new Error("Both fields are required.");
        }
        
        await axios.post('/api/sims', { simNumber, phoneNumber });
        fetchSims(); 
        setSimNumber('');
        setPhoneNumber('');
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
        value={simNumber}
        onChange={(e) => setSimNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <button type="submit">Add SIM</button>
    </form>
  );
};

export default SimForm;
