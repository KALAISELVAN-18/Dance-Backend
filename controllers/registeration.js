const Registration = require('../models/registration');

// Simple test route
const testRoute = (req, res) => {
  res.json({ message: 'Registration route working' });
};

const createRegistration = async (req, res) => {
  try {
    const { classId, className, userEmail } = req.body;
    console.log('Creating registration:', { classId, className, userEmail, userId: req.userId });
    const registration = new Registration({
      userId: req.userId,
      classId,
      className,
      userEmail
    });
    const savedRegistration = await registration.save();
    console.log('Registration saved successfully:', savedRegistration);
    res.json(savedRegistration);
  } catch (error) {
    console.error('Registration creation error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getAllRegistrations = async (req, res) => {
  try {
    console.log('Fetching registrations...');
    const registrations = await Registration.find();
    console.log('Found registrations:', registrations.length, 'records');
    console.log('Registration data:', registrations);
    res.json(registrations);
  } catch (error) {
    console.error('Registration fetch error:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteRegistration = async (req, res) => {
  try {
    console.log('Deleting registration:', req.params.id);
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Registration deleted successfully' });
  } catch (error) {
    console.error('Registration deletion error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRegistration, getAllRegistrations, deleteRegistration, testRoute };
