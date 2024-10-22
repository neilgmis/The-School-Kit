const mongoose = require('mongoose');

const pointsBankSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  totalPoints: { type: Number, default: 0 },
  transactionHistory: [
    {
      date: { type: Date, required: true },
      points: { type: Number, required: true },  // Points added/deducted
      reason: { type: String }  // Description of the event
    }
  ]
});

module.exports = mongoose.model('PointsBank', pointsBankSchema);
