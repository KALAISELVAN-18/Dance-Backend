const mongoose = require('mongoose');

const classRegistrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  age: { type: Number, required: true },
  experienceLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  preferredSchedule: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ClassRegistration', classRegistrationSchema);