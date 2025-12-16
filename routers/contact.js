const express = require('express');
const contactController = require('../controllers/contact');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', contactController.createContact);
router.get('/', authMiddleware.adminAuth, contactController.getAllContacts);

module.exports = router;