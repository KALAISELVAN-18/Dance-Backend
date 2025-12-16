const axios = require('axios');

// Replace with your actual Render backend URL
const RENDER_URL = 'https://your-render-app-name.onrender.com';

const createAdminUser = async () => {
  try {
    // First, try to register the admin user
    const response = await axios.post(`${RENDER_URL}/api/auth/register`, {
      fullName: 'Dance Academy Admin',
      email: 'admin@danceacademy.com',
      password: 'Admin@123'
    });

    console.log('Admin user created successfully:', response.data);
    
    // Now we need to update the role to admin manually in the database
    // Since we can't directly update via API without admin privileges
    console.log('Please manually update the user role to "admin" in your MongoDB database');
    console.log('Or use the MongoDB Atlas interface to change the role field to "admin"');
    
  } catch (error) {
    if (error.response?.data?.message === 'User already exists') {
      console.log('Admin user already exists');
    } else {
      console.error('Error creating admin user:', error.response?.data || error.message);
    }
  }
};

createAdminUser();