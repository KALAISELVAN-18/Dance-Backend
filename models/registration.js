const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  classId: { type: String, required: true },
  className: { type: String, required: true },
  userEmail: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  experienceLevel: { type: String, required: true },
  preferredSchedule: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
