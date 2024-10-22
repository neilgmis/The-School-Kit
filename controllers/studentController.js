const Student = require('../models/student');

// Add a new student
exports.addStudent = async (req, res) => {
  const { name, email, class: studentClass } = req.body;

  try {
    // Check if student already exists
    let student = await Student.findOne({ email });
    if (student) {
      return res.status(400).json({ msg: 'Student already exists' });
    }

    // Create and save new student
    student = new Student({
      name,
      email,
      class: studentClass
    });

    await student.save();  // Save the student to the database
    res.status(201).json(student);
  } catch (err) {
    console.error(err.message);  // Log any errors
    res.status(500).send('Server error');
  }
};

// View a student by ID
exports.viewStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
