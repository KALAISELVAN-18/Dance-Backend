const express = require('express');
const { createRegistration, getAllRegistrations, deleteRegistration } = require('../controllers/registeration');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createRegistration);
router.get('/', (req, res) => {
  res.json({ message: 'GET registrations working' });
});
router.get('/all', getAllRegistrations);
router.delete('/:id', auth, deleteRegistration);

module.exports = router;
