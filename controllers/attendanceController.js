const Attendance = require('../models/attendance');

// Log attendance event
exports.logAttendance = async (req, res) => {
  const { studentId, date, status, comments } = req.body;

  try {
    const newAttendance = new Attendance({
      studentId,
      date,
      status,
      comments
    });

    await newAttendance.save();
    res.json({ msg: 'Attendance logged successfully', attendance: newAttendance });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// View attendance report for a specific student
exports.viewAttendance = async (req, res) => {
  const { studentId } = req.params;

  try {
    const attendanceData = await Attendance.find({ studentId });
    res.json(attendanceData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get filtered attendance data
exports.getFilteredAttendance = async (req, res) => {
  const { yearGroup, formGroup, status } = req.query;

  try {
    const query = {};
    if (yearGroup) query.yearGroup = yearGroup;
    if (formGroup) query.formGroup = formGroup;
    if (status) query.status = status;

    const attendanceData = await Attendance.find(query);
    res.json(attendanceData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
