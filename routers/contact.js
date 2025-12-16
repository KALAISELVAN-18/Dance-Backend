const express = require('express');
const { createContact, getAllContacts } = require('../Controllers/contact');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', createContact);
router.get('/', auth, getAllContacts);

module.exports = router;