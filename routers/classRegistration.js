const express = require('express');
const classRegistrationController = require('../controllers/classRegistration');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', classRegistrationController.createClassRegistration);
router.get('/', authMiddleware.adminAuth, classRegistrationController.getAllClassRegistrations);

module.exports = router;