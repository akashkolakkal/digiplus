const SimCard = require('../models/SimCard');

// Activate SIM
exports.activateSim = async (req, res) => {
    const { sim_number } = req.body;

    try {
        const simCard = await SimCard.findOne({ sim_number });
        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        if (simCard.status === 'active') {
            return res.status(400).json({ message: 'SIM card is already active' });
        }

        simCard.status = 'active';
        simCard.activation_date = new Date();
        await simCard.save();

        res.status(200).json({ message: 'SIM card activated successfully', simCard });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Deactivate SIM
exports.deactivateSim = async (req, res) => {
    const { sim_number } = req.body;

    try {
        const simCard = await SimCard.findOne({ sim_number });
        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        if (simCard.status === 'inactive') {
            return res.status(400).json({ message: 'SIM card is already inactive' });
        }

        simCard.status = 'inactive';
        simCard.activation_date = null;
        await simCard.save();

        res.status(200).json({ message: 'SIM card deactivated successfully', simCard });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get SIM Details
exports.getSimDetails = async (req, res) => {
    const { simNumber } = req.params;

    try {
        const simCard = await SimCard.findOne({ sim_number: simNumber });
        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json(simCard);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
