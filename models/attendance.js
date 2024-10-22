const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  date: { type: Date, required: true },
  AM: { type: String, required: true },  // Attendance for AM
  PM: { type: String, required: true },  // Attendance for PM
  comment: { type: String }  // Optional teacher comment
});

module.exports = mongoose.model('Attendance', attendanceSchema);
