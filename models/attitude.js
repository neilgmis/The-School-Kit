const mongoose = require('mongoose');

// Define Attitude to Learning Schema
const attitudeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  attendance: {
    type: Number,
    default: 1  // +1 point for attendance
  },
  lateness: {
    type: Number,
    default: 0  // -2 points if late
  },
  lessonPerformance: {
    type: Number,
    required: true  // Points based on performance: 0, 5, 10, 15
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Attitude', attitudeSchema);
