const SimCard = require('../models/SimCard');

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

exports.getSimDetails = async (req, res) => {
    const { simNumber } = req.params;
    console.log(simNumber);
    try {
        const simCard = await SimCard.findOne({ simNumber: simNumber });
        console.log(simCard)
        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json(simCard);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addSimDetails = async (req, res) => {
    const { simNumber, phoneNumber } = req.body;
  
    try {
      const existingSim = await SimCard.findOne({ simNumber });
      if (existingSim) {
        return res.status(400).json({ message: 'SIM card already exists' });
      }
  
      const simCard = new SimCard({
        simNumber,
        phoneNumber,
        status: 'inactive', 
      });
  
      const newSim = await simCard.save();
      res.status(201).json({
        message: 'SIM card created successfully',
        simCard: newSim,
      });
    } catch (error) {
      console.error('Error during SIM card creation:', error); 
      res.status(500).json({ error: 'Error creating SIM card' });
    }
  };

