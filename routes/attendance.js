const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { logAttendance, viewAttendance, getFilteredAttendance } = require('../controllers/attendanceController');
const auth = require('../middleware/auth'); // Import auth middleware

// Only Teachers can log attendance events
router.post('/log', auth, checkRole(['Teacher']), logAttendance);

// Teachers and Leaders can view attendance reports
router.get('/:studentId', auth, checkRole(['Teacher', 'Leader']), viewAttendance);

// Get filtered attendance data (applies to Leaders, Teachers, and SuperAdmins)
router.get('/', auth, checkRole(['Leader', 'Teacher', 'SuperAdmin']), getFilteredAttendance);

module.exports = router;
