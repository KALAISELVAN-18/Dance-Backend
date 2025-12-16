const express = require('express');
const signupController = require("../controllers/signup");
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/register', signupController.register);
router.post('/login', signupController.login);

module.exports = router;
