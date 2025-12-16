const ClassRegistration = require('../models/ClassRegistration');

const createClassRegistration = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, age, experienceLevel, preferredSchedule } = req.body;
    
    if (!fullName || !email || !phoneNumber || !age || !experienceLevel || !preferredSchedule) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const registration = new ClassRegistration({
      fullName,
      email,
      phoneNumber,
      age: parseInt(age),
      experienceLevel,
      preferredSchedule
    });
    
    await registration.save();
    console.log('Class registration saved:', registration);
    res.json({ message: 'Class registration successful', registration });
  } catch (error) {
    console.error('Class registration error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getAllClassRegistrations = async (req, res) => {
  try {
    const registrations = await ClassRegistration.find().sort({ createdAt: -1 });
    res.json(registrations);
  } catch (error) {
    console.error('Class registration fetch error:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteClassRegistration = async (req, res) => {
  try {
    await ClassRegistration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Class registration deleted successfully' });
  } catch (error) {
    console.error('Class registration deletion error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createClassRegistration, getAllClassRegistrations, deleteClassRegistration };