// Complete Dance Academy API Service for Frontend Integration
// Base URL Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// API Helper Function
const apiCall = async (url, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    },
    ...options
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};

// Complete API Service Object
export const danceAcademyAPI = {
  
  // 🔐 AUTHENTICATION
  auth: {
    register: (userData) => apiCall(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(userData) // { fullName, email, password, role }
    }),
    
    login: (credentials) => apiCall(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials) // { email, password }
    })
  },

  // 📚 CLASSES MANAGEMENT
  classes: {
    getAll: () => apiCall(`${API_BASE_URL}/classes`),
    
    create: (classData) => apiCall(`${API_BASE_URL}/classes`, {
      method: 'POST',
      body: JSON.stringify(classData)
    }),
    
    delete: (id) => apiCall(`${API_BASE_URL}/classes/${id}`, {
      method: 'DELETE'
    })
  },

  // 📝 USER REGISTRATIONS
  registrations: {
    getAll: () => apiCall(`${API_BASE_URL}/registrations`),
    
    create: (registrationData) => apiCall(`${API_BASE_URL}/registrations`, {
      method: 'POST',
      body: JSON.stringify(registrationData)
    }),
    
    delete: (id) => apiCall(`${API_BASE_URL}/registrations/${id}`, {
      method: 'DELETE'
    })
  },

  // 📞 CONTACT FORM
  contact: {
    submit: (contactData) => apiCall(`${API_BASE_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify(contactData) // { name, email, message }
    }),
    
    getAll: () => apiCall(`${API_BASE_URL}/contact`) // Admin only
  },

  // 🎓 CLASS REGISTRATION
  classRegistration: {
    register: (registrationData) => apiCall(`${API_BASE_URL}/class-registration`, {
      method: 'POST',
      body: JSON.stringify(registrationData) 
      // { fullName, email, phoneNumber, age, experienceLevel, preferredSchedule }
    }),
    
    getAll: () => apiCall(`${API_BASE_URL}/class-registration`) // Admin only
  },

  // 👨🏫 INSTRUCTORS
  instructors: {
    getAll: () => apiCall(`${API_BASE_URL}/instructors`),
    
    add: (instructorData) => apiCall(`${API_BASE_URL}/instructors`, {
      method: 'POST',
      body: JSON.stringify(instructorData) 
      // { fullName, email, phoneNumber, specialization, experience, bio }
    }),
    
    delete: (id) => apiCall(`${API_BASE_URL}/instructors/${id}`, {
      method: 'DELETE'
    })
  },

  // 🔑 PASSWORD RESET
  password: {
    forgot: (email) => apiCall(`${API_BASE_URL}/password/forgot`, {
      method: 'POST',
      body: JSON.stringify({ email })
    }),
    
    reset: (token, newPassword) => apiCall(`${API_BASE_URL}/password/reset`, {
      method: 'POST',
      body: JSON.stringify({ token, newPassword })
    })
  }
};

// Usage Examples:

// 1. User Registration
/*
try {
  const result = await danceAcademyAPI.auth.register({
    fullName: "John Doe",
    email: "john@example.com",
    password: "password123",
    role: "user"
  });
  localStorage.setItem('token', result.token);
} catch (error) {
  console.error('Registration failed:', error.message);
}
*/

// 2. User Login
/*
try {
  const result = await danceAcademyAPI.auth.login({
    email: "john@example.com",
    password: "password123"
  });
  localStorage.setItem('token', result.token);
} catch (error) {
  console.error('Login failed:', error.message);
}
*/

// 3. Submit Contact Form
/*
try {
  await danceAcademyAPI.contact.submit({
    name: "Jane Doe",
    email: "jane@example.com",
    message: "I'm interested in dance classes"
  });
  alert('Message sent successfully!');
} catch (error) {
  alert('Error: ' + error.message);
}
*/

// 4. Class Registration
/*
try {
  await danceAcademyAPI.classRegistration.register({
    fullName: "Alice Smith",
    email: "alice@example.com",
    phoneNumber: "1234567890",
    age: 25,
    experienceLevel: "Beginner",
    preferredSchedule: "Evening"
  });
  alert('Registration successful!');
} catch (error) {
  alert('Error: ' + error.message);
}
*/

// 5. Get All Instructors
/*
try {
  const instructors = await danceAcademyAPI.instructors.getAll();
  console.log('Instructors:', instructors);
} catch (error) {
  console.error('Failed to fetch instructors:', error.message);
}
*/

// 6. Add New Instructor (Admin only)
/*
try {
  await danceAcademyAPI.instructors.add({
    fullName: "Michael Johnson",
    email: "michael@example.com",
    phoneNumber: "9876543210",
    specialization: "Hip Hop",
    experience: "5 years",
    bio: "Professional hip hop dancer and choreographer"
  });
  alert('Instructor added successfully!');
} catch (error) {
  alert('Error: ' + error.message);
}
*/

// 7. Forgot Password
/*
try {
  const result = await danceAcademyAPI.password.forgot("user@example.com");
  console.log('Reset token:', result.resetToken);
} catch (error) {
  console.error('Password reset failed:', error.message);
}
*/

// 8. Reset Password
/*
try {
  await danceAcademyAPI.password.reset("reset_token_here", "newPassword123");
  alert('Password reset successful!');
} catch (error) {
  alert('Password reset failed: ' + error.message);
}
*/

export default danceAcademyAPI;