const express = require('express');
const { register, login, adminLogin, getAllUsers, updateUserRole } = require("../controllers/signup");
const { auth, adminAuth } = require('../middleware/auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/admin-login', adminLogin);
router.get('/users', adminAuth, getAllUsers);
router.put('/users/:userId/role', adminAuth, updateUserRole);

module.exports = router;
