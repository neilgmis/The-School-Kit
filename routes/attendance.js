// routes/attendance.js

const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const auth = require('../middleware/auth');
const { logAttendance, viewAttendance } = require('../controllers/attendanceController');

// Only SchoolAdmin or Leader (SLT) can log attendance
router.post('/log', auth, checkRole('SchoolAdmin'), logAttendance);

// Teachers and Leaders can view attendance
router.get('/:studentId', auth, checkRole('Teacher'), viewAttendance);

module.exports = router;
