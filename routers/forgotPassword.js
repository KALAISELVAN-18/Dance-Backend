const express = require('express');
const { forgotPassword, resetPassword } = require('../controllers/forgotPassword');
const router = express.Router();

router.post('/forgot', forgotPassword);
router.post('/reset', resetPassword);

module.exports = router;