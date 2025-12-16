const express = require('express');
const registrationController = require('../controllers/registeration');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware.auth, registrationController.createRegistration);
router.get('/', authMiddleware.adminAuth, registrationController.getAllRegistrations);
router.delete('/:id', authMiddleware.adminAuth, registrationController.deleteRegistration);

module.exports = router;
