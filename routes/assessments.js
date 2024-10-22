const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const { logAssessment, viewAssessment, getFilteredAssessment } = require('../controllers/assessmentController');
const auth = require('../middleware/auth'); // Import auth middleware

// Only Teachers can log assessment events
router.post('/log', auth, checkRole(['Teacher']), logAssessment);

// Teachers and Leaders can view assessment reports
router.get('/:studentId', auth, checkRole(['Teacher', 'Leader']), viewAssessment);

// Get filtered assessment data (applies to Leaders, Teachers, and SuperAdmins)
router.get('/', auth, checkRole(['Leader', 'Teacher', 'SuperAdmin']), getFilteredAssessment);

module.exports = router;
