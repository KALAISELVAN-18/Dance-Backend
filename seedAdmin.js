const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/signup');
require('dotenv').config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@danceacademy.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';
    
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    
    const admin = new User({
      fullName: 'Dance Academy Admin',
      email: adminEmail,
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log('Please change the password after first login');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();