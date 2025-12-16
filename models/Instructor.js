const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: String, required: true },
  bio: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Instructor', instructorSchema);