const Attendance = require('../models/attendance');

// Log attendance
exports.logAttendance = async (req, res) => {
  const { student, date, AM, PM, comment } = req.body;

  try {
    const attendance = new Attendance({
      student,
      date,
      AM,
      PM,
      comment
    });

    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// View attendance for a student
exports.viewAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ student: req.params.studentId });
    res.json(attendance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
