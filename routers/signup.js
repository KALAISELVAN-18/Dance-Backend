const express = require('express');
const signupController = require("../controllers/signup");
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/register', signupController.register);
router.post('/login', signupController.login);
router.post('/admin-login', signupController.adminLogin);
router.get('/users', authMiddleware.adminAuth, signupController.getAllUsers);
router.put('/users/:userId/role', authMiddleware.adminAuth, signupController.updateUserRole);

module.exports = router;
