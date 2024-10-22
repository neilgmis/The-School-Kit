const PointsBank = require('../models/pointsBank');

// Update student points
exports.updatePoints = async (req, res) => {
  const { student, points, reason } = req.body;

  try {
    let pointsBank = await PointsBank.findOne({ student });

    if (!pointsBank) {
      pointsBank = new PointsBank({ student, totalPoints: points });
    } else {
      pointsBank.totalPoints += points;
    }

    pointsBank.transactionHistory.push({
      date: new Date(),
      points,
      reason
    });

    await pointsBank.save();
    res.json(pointsBank);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// View student points
exports.viewPoints = async (req, res) => {
  try {
    const pointsBank = await PointsBank.findOne({ student: req.params.studentId });
    res.json(pointsBank);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
