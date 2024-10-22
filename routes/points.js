const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { updatePoints, viewPoints } = require('../controllers/pointsController');

// Only Teachers can update student points
router.post('/update', checkRole('Teacher'), updatePoints);

// Students can view their own points
router.get('/:studentId', checkRole('Student'), viewPoints);

module.exports = router;
