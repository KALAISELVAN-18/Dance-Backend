const express = require('express');
const { forgotPassword, resetPassword } = require('../Controllers/forgotPassword');
const router = express.Router();

router.post('/forgot', forgotPassword);
router.post('/reset', resetPassword);

module.exports = router;