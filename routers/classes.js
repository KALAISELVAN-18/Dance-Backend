const express = require('express');
const classesController = require('../controllers/classes');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', classesController.getAllClasses);
router.post('/', authMiddleware.adminAuth, classesController.createClass);
router.delete('/:id', authMiddleware.adminAuth, classesController.deleteClass);

module.exports = router;
