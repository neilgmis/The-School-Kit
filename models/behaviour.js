const mongoose = require('mongoose');

// Define Behaviour Schema
const behaviourSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  event: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: true  // Positive or Negative
  },
  pointsImpact: {
    type: Number,
    required: true  // Positive or negative impact on points
  }
});

module.exports = mongoose.model('Behaviour', behaviourSchema);
