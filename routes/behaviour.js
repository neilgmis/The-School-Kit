const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole'); // Import checkRole from correct middleware file
const { logBehaviour, viewBehaviour, getFilteredBehaviour } = require('../controllers/behaviourController');
const auth = require('../middleware/auth'); // Import auth middleware

// Only Teachers can log behaviour events
router.post('/log', auth, checkRole(['Teacher']), logBehaviour);

// Teachers and Leaders can view behaviour reports
router.get('/:studentId', auth, checkRole(['Teacher', 'Leader']), viewBehaviour);

// Get filtered behaviour data (applies to Leaders, Teachers, and SuperAdmins)
router.get('/', auth, checkRole(['Leader', 'Teacher', 'SuperAdmin']), getFilteredBehaviour);

module.exports = router;
