import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SimForm from './components/SimForm';
import SimList from './components/SimList';

const App = () => {
  const [sims, setSims] = useState([]);

  const fetchSims = async () => {
    try {
      const response = await axios.get('/api/sims');
      const simsData = Array.isArray(response.data) ? response.data : []; 
      setSims(simsData);
    } catch (error) {
      console.error("Error fetching SIM cards:", error);
    }
  };

  useEffect(() => {
    fetchSims();
  }, []);

  return (
    <div>
      <h1>SIM Card Activation Service</h1>
      <SimForm fetchSims={fetchSims} />
      <SimList sims={sims} fetchSims={fetchSims} />
    </div>
  );
};

export default App;
