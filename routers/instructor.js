const express = require('express');
const { createInstructor, getAllInstructors, deleteInstructor } = require('../controllers/instructor');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createInstructor);
router.get('/', getAllInstructors);
router.delete('/:id', auth, deleteInstructor);

module.exports = router;