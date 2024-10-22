const Attitude = require('../models/attitude');
const PointsBank = require('../models/pointsBank');  // For adding points to the bank

// Add Attitude to Learning data
exports.addAttitude = async (req, res) => {
  const { student, lateness, lessonPerformance } = req.body;

  try {
    const attitude = new Attitude({
      student,
      lateness,
      lessonPerformance
    });

    await attitude.save();

    // Automatically add points to student's points bank
    const totalPoints = attitude.attendance + attitude.lateness + attitude.lessonPerformance;
    await PointsBank.findOneAndUpdate(
      { student },
      { $inc: { points: totalPoints } }
    );

    res.status(201).json(attitude);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// View Attitude to Learning trends (filter by student, date)
exports.viewAttitude = async (req, res) => {
  const { student, startDate, endDate } = req.query;

  try {
    const query = {};

    if (student) query.student = student;
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const attitudes = await Attitude.find(query).populate('student');
    res.json(attitudes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
