const express = require('express');
const instructorController = require('../controllers/instructor');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware.adminAuth, instructorController.createInstructor);
router.get('/', instructorController.getAllInstructors);
router.put('/:id', authMiddleware.adminAuth, instructorController.updateInstructor);
router.delete('/:id', authMiddleware.adminAuth, instructorController.deleteInstructor);

module.exports = router;