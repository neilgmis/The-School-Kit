// controllers/attitudeController.js
const Attitude = require('../models/attitude');

// Log attitude data
exports.logAttitude = async (req, res) => {
  const { studentId, date, points, comments } = req.body;

  try {
    const newAttitude = new Attitude({
      studentId,
      date,
      points,
      comments
    });

    await newAttitude.save();
    res.json({ msg: 'Attitude data logged successfully', attitude: newAttitude });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// View attitude report for a specific student
exports.viewAttitude = async (req, res) => {
  const { studentId } = req.params;

  try {
    const attitudeData = await Attitude.find({ studentId });
    res.json(attitudeData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get filtered attitude data
exports.getFilteredAttitude = async (req, res) => {
  const { yearGroup, formGroup, pointsRange } = req.query;

  try {
    const query = {};
    if (yearGroup) query.yearGroup = yearGroup;
    if (formGroup) query.formGroup = formGroup;
    if (pointsRange) query.points = { $gte: pointsRange.min, $lte: pointsRange.max };

    const attitudeData = await Attitude.find(query);
    res.json(attitudeData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
