const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.log('MongoDB Atlas connection failed:', err.message);
    console.log('Please whitelist your IP address in MongoDB Atlas');
  });

app.use('/api/auth', require('./routers/signup'));
app.use('/api/classes', require('./routers/classes'));
app.use('/api/registrations', require('./routers/registration'));
app.use('/api/contact', require('./routers/contact'));
app.use('/api/class-registration', require('./routers/classRegistration'));
app.use('/api/instructors', require('./routers/instructor'));
app.use('/api/password', require('./routers/forgotPassword'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
