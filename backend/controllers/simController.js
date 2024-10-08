const SimCard = require('../models/SimCard');

exports.activateSim = async (req, res) => {
    const { simNumber } = req.body;

    try {
        const simCard = await SimCard.findOne({ simNumber });
        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        if (simCard.status === 'active') {
            return res.status(400).json({ message: 'SIM card is already active' });
        }

        simCard.status = 'active';
        simCard.activationDate = new Date();
        await simCard.save();

        res.status(200).json({ message: 'SIM card activated successfully', simCard });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deactivateSim = async (req, res) => {
    const { simNumber } = req.body;

    try {
        const simCard = await SimCard.findOne({ simNumber });
        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        if (simCard.status === 'inactive') {
            return res.status(400).json({ message: 'SIM card is already inactive' });
        }

        simCard.status = 'inactive';
        simCard.activationDate = null;
        await simCard.save();

        res.status(200).json({ message: 'SIM card deactivated successfully', simCard });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getSimDetails = async (req, res) => {
    const { simNumber } = req.params;
    try {
        const simCard = await SimCard.findOne({ simNumber });
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

  exports.getAllSims = async (req, res) => {
    try {
      const sims = await SimCard.find(); 
      res.status(200).json(sims); 
    } catch (error) {
      console.error("Error fetching SIM cards:", error);
      res.status(500).json({ message: 'Error fetching SIM cards' });
    }
  };