const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');  // Ensure this line is correct

const { addAssessment, viewAssessments } = require('../controllers/assessmentController');

// Routes for assessments
router.post('/', auth, checkRole(['Teacher', 'SchoolAdmin', 'Leader', 'SuperAdmin']), addAssessment);
router.get('/', auth, checkRole(['Teacher', 'SchoolAdmin', 'Leader', 'SuperAdmin']), viewAssessments);

module.exports = router;
