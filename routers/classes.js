const express = require('express');
const { getAllClasses, createClass, deleteClass } = require('../controllers/classes');
const { auth, adminAuth } = require('../middleware/auth');
const router = express.Router();

router.get('/', getAllClasses);
router.post('/', adminAuth, createClass);
router.delete('/:id', adminAuth, deleteClass);

module.exports = router;
