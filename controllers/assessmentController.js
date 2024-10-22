const Assessment = require('../models/assessment');

// Add a new assessment
exports.addAssessment = async (req, res) => {
  const { student, subject, score } = req.body;

  try {
    const assessment = new Assessment({
      student,
      subject,
      score
    });

    await assessment.save();
    res.status(201).json(assessment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// View assessments (filter by student, subject, date)
exports.viewAssessments = async (req, res) => {
  const { student, subject, startDate, endDate } = req.query;

  try {
    const query = {};

    if (student) query.student = student;
    if (subject) query.subject = subject;
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const assessments = await Assessment.find(query).populate('student');
    res.json(assessments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
