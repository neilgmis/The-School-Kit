const Assessment = require('../models/assessment');

// Log assessment event
exports.logAssessment = async (req, res) => {
  const { studentId, subject, score, date, comments } = req.body;

  try {
    const newAssessment = new Assessment({
      studentId,
      subject,
      score,
      date,
      comments
    });

    await newAssessment.save();
    res.json({ msg: 'Assessment logged successfully', assessment: newAssessment });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// View assessment report for a specific student
exports.viewAssessment = async (req, res) => {
  const { studentId } = req.params;

  try {
    const assessmentData = await Assessment.find({ studentId });
    res.json(assessmentData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get filtered assessment data
exports.getFilteredAssessment = async (req, res) => {
  const { yearGroup, subject, scoreRange } = req.query;

  try {
    const query = {};
    if (yearGroup) query.yearGroup = yearGroup;
    if (subject) query.subject = subject;
    if (scoreRange) query.score = { $gte: scoreRange.min, $lte: scoreRange.max };

    const assessmentData = await Assessment.find(query);
    res.json(assessmentData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
