const Instructor = require('../models/Instructor');

const createInstructor = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, specialization, experience, bio } = req.body;
    
    if (!fullName || !email || !phoneNumber || !specialization || !experience || !bio) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const existingInstructor = await Instructor.findOne({ email });
    if (existingInstructor) {
      return res.status(400).json({ message: 'Instructor with this email already exists' });
    }
    
    const instructor = new Instructor({
      fullName,
      email,
      phoneNumber,
      specialization,
      experience,
      bio
    });
    
    await instructor.save();
    console.log('Instructor added:', instructor);
    res.json({ message: 'Instructor added successfully', instructor });
  } catch (error) {
    console.error('Instructor creation error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find().sort({ createdAt: -1 });
    res.json(instructors);
  } catch (error) {
    console.error('Instructor fetch error:', error);
    res.status(500).json({ message: error.message });
  }
};

const updateInstructor = async (req, res) => {
  try {
    const { name, email, phone, specialization, experience, bio } = req.body;
    
    const instructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      { fullName: name, email, phoneNumber: phone, specialization, experience, bio },
      { new: true }
    );
    
    if (!instructor) {
      return res.status(404).json({ message: 'Instructor not found' });
    }
    
    res.json({ message: 'Instructor updated successfully', instructor });
  } catch (error) {
    console.error('Instructor update error:', error);
    res.status(500).json({ message: error.message });
  }
};

const deleteInstructor = async (req, res) => {
  try {
    await Instructor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Instructor deleted successfully' });
  } catch (error) {
    console.error('Instructor deletion error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createInstructor, getAllInstructors, updateInstructor, deleteInstructor };