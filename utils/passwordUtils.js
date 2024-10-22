const bcrypt = require('bcryptjs');

// Function to hash a password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);  // Generate a salt
  return await bcrypt.hash(password, salt);  // Hash the password with the salt
};

// Function to compare a plain-text password with a hashed password
const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);  // Compare passwords
};

module.exports = { hashPassword, comparePassword };
