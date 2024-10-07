// src/components/SimCard.js
import React from 'react';
import axios from 'axios';

const SimCard = ({ sim, fetchSims }) => {
  const handleActivate = async () => {
    try {
      await axios.post('https://digiplus-server.vercel.app/api/sims/activate', { simNumber: sim.simNumber });
      fetchSims(); // Refresh the list after activation
    } catch (error) {
      console.error("Error activating SIM card:", error.response?.data || error.message);
    }
  };

  const handleDeactivate = async () => {
    try {
      await axios.post('https://digiplus-server.vercel.app/api/sims/deactivate', { simNumber: sim.simNumber });
      fetchSims(); // Refresh the list after deactivation
    } catch (error) {
      console.error("Error deactivating SIM card:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <p>SIM Number: {sim.simNumber}</p>
      <p>Phone Number: {sim.phoneNumber}</p>
      <p>Status: {sim.status}</p>
      <p>Activation Date: {sim.activationDate ? new Date(sim.activationDate).toLocaleString() : 'N/A'}</p>
      <button onClick={handleActivate} disabled={sim.status === 'active'}>Activate</button>
      <button onClick={handleDeactivate} disabled={sim.status === 'inactive'}>Deactivate</button>
    </div>
  );
};

export default SimCard;
