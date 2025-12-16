const express = require('express');
const { getAllClasses, createClass, deleteClass } = require('../Controllers/classes');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', getAllClasses);
router.post('/', auth, createClass);
router.delete('/:id', auth, deleteClass);

module.exports = router;
