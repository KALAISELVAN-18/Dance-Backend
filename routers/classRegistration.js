const express = require('express');
const { createClassRegistration, getAllClassRegistrations } = require('../controllers/classRegistration');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', createClassRegistration);
router.get('/', auth, getAllClassRegistrations);

module.exports = router;