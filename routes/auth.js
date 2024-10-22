const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const checkRole = require('../middleware/checkRole');

// Public routes (accessible by all users)
router.post('/register', register);
router.post('/login', login);

// Role-protected routes example
router.get('/admin-data', checkRole('SuperAdmin'), (req, res) => {
  res.json({ msg: 'This is data for SuperAdmins only' });
});

router.get('/teacher-data', checkRole('Teacher'), (req, res) => {
  res.json({ msg: 'This is data for Teachers only' });
});

module.exports = router;
