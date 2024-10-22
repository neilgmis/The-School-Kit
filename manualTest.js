const bcrypt = require('bcryptjs');

// Plain text password that was entered
const plainPassword = 'newpassword';

// Hashed password from the database
const hashedPassword = '$2a$10$RXh5mceOWrKiDLnGun7Lduz5V6vrpURXCaU09QLB.ZXyznoyrgoz'; // Replace this with the current hash

// Compare the plain password with the hashed password
bcrypt.compare(plainPassword, hashedPassword, (err, isMatch) => {
  if (err) throw err;
  console.log('Do the passwords match?', isMatch); // This should return true if the passwords match
});
