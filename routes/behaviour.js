const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { logBehaviour, viewBehaviour } = require('../controllers/behaviourController');

// Only Teachers can log behaviour events
router.post('/log', checkRole('Teacher'), logBehaviour);

// Teachers and Leaders can view behaviour reports
router.get('/:studentId', checkRole('Teacher'), viewBehaviour);

module.exports = router;
