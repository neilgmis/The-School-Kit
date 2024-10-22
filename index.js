const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();  // Load environment variables

// Middleware
app.use(express.json());  // Parse incoming JSON requests

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
app.use('/api/assessments', assessmentRoutes);
app.use('/api/attitude', attitudeRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
