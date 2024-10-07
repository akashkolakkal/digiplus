import React from 'react';
import SimCard from './SimCard';

const SimList = ({ sims = [], fetchSims }) => {
  const normalizeSimData = (sim) => {
    return {
      _id: sim._id,
      simNumber: sim.simNumber,
      phoneNumber: sim.phoneNumber,
      status: sim.status,
      activationDate: sim.activationDate
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
