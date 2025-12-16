const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  classId: { type: String, required: true },
  className: { type: String, required: true },
  userEmail: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
