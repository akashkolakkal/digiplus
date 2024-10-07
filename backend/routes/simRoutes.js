const express = require('express');
const router = express.Router();
const {
    activateSim,
    deactivateSim,
    getSimDetails,
    addSimDetails,
    getAllSims
} = require('../controllers/simController');

router.post('/add', addSimDetails);  

router.post('/activate', activateSim);

router.post('/deactivate', deactivateSim);

router.get('/sim-details/:simNumber', getSimDetails);

router.get('/', getAllSims);

module.exports = router;
