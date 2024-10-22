const express = require('express');
const router = express.Router();
const { logAttitude, viewAttitude, getFilteredAttitude } = require('../controllers/attitudeController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

// Only Teachers can log attitude events
router.post('/log', auth, checkRole(['Teacher']), logAttitude);

// Teachers and Leaders can view attitude reports
router.get('/:studentId', auth, checkRole(['Teacher', 'Leader']), viewAttitude);

// Get filtered attitude data (applies to Leaders, Teachers, and SuperAdmins)
router.get('/', auth, checkRole(['Leader', 'Teacher', 'SuperAdmin']), getFilteredAttitude);

module.exports = router;
