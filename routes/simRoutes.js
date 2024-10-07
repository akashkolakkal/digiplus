const express = require('express');
const router = express.Router();
const {
    activateSim,
    deactivateSim,
    getSimDetails,
    addSimDetails,
} = require('../controllers/simController');

router.post('/', addSimDetails);  

router.post('/activate', activateSim);

router.post('/deactivate', deactivateSim);

router.get('/sim-details/:simNumber', getSimDetails);

// router.get('/sims', getAllSims);

module.exports = router;
