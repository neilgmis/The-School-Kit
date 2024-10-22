const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');  // Ensure user is authenticated
const { addStudent, viewStudent } = require('../controllers/studentController');

// Route to add a new student (POST)
router.post('/', auth, addStudent);

// Route to view a student by ID (GET)
router.get('/:id', auth, viewStudent);

module.exports = router;
