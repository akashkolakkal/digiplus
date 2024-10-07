// src/components/SimList.js
import React from 'react';
import SimCard from './SimCard';

const SimList = ({ sims, fetchSims }) => {
  // Function to normalize SIM card properties
  const normalizeSimData = (sim) => {
    return {
      _id: sim._id,
      simNumber: sim.simNumber || sim.sim_number,  // Handle both formats
      phoneNumber: sim.phoneNumber || sim.phone_number,  // Handle both formats
      status: sim.status,
      activationDate: sim.activationDate || sim.activation_date,  // Handle both formats
    };
  };

  return (
    <div>
      <h2>SIM Cards</h2>
      {sims.length > 0 ? (
        sims.map((sim) => {
          const normalizedSim = normalizeSimData(sim);
          return (
            <SimCard key={normalizedSim._id} sim={normalizedSim} fetchSims={fetchSims} />
          );
        })
      ) : (
        <p>No SIM cards found.</p>
      )}
    </div>
  );
};

export default SimList;
