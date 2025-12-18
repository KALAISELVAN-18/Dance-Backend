const express = require('express');
const registrationController = require('../controllers/registeration');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Public route for user registration
router.post('/', registrationController.createRegistration);
// Admin route for creating registrations with auth
router.post('/admin', authMiddleware.adminAuth, registrationController.createRegistration);
router.get('/', authMiddleware.adminAuth, registrationController.getAllRegistrations);
router.delete('/:id', authMiddleware.adminAuth, registrationController.deleteRegistration);

module.exports = router;
