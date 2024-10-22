const Behaviour = require('../models/behaviour');

// Log behaviour event
exports.logBehaviour = async (req, res) => {
  const { student, event, date, type, pointsImpact } = req.body;

  try {
    const behaviour = new Behaviour({
      student,
      event,
      date,
      type,
      pointsImpact
    });

    await behaviour.save();
    res.status(201).json(behavior);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// View behaviour events for a student
exports.viewBehaviour = async (req, res) => {
  try {
    const behaviour = await Behaviour.find({ student: req.params.studentId });
    res.json(behaviour);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
// Get filtered behaviour data
exports.getFilteredBehaviour = async (req, res) => {
    const { yearGroup, formGroup } = req.query;
  
    try {
      // Build the query based on filters
      const query = {};
      if (yearGroup) query.yearGroup = yearGroup;
      if (formGroup) query.formGroup = formGroup;
  
      const behaviourData = await Behaviour.find(query);
      res.json(behaviourData);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }