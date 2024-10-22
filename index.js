const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');  // Import path module to serve static files
const app = express();

dotenv.config();  // Load environment variables

// Middleware
app.use(express.json());  // Parse incoming JSON requests

// Serve static files from the 'public' directory (e.g., leader-dashboard.html)
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const attendanceRoutes = require('./routes/attendance');
const behaviourRoutes = require('./routes/behaviour');  // UK spelling
const pointsRoutes = require('./routes/points');
const assessmentRoutes = require('./routes/assessments');
const attitudeRoutes = require('./routes/attitude');

// Use routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/students', studentRoutes);  // Student routes
app.use('/api/attendance', attendanceRoutes);  // Attendance routes
app.use('/api/behaviour', behaviourRoutes);  // Behaviour routes
app.use('/api/points', pointsRoutes);  // Points routes
app.use('/api/assessments', assessmentRoutes);  // Assessment routes
app.use('/api/attitude', attitudeRoutes);  // Attitude routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server and listen on port 5001 (or environment-defined port)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
