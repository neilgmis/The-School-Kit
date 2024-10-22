const bcrypt = require('bcryptjs');

const plainPassword = 'newpassword';

// Manually hash the password
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(plainPassword, salt, (err, hash) => {
    if (err) throw err;

    console.log('Hashed password:', hash);

    // Manually compare the plain password with the hash
    bcrypt.compare(plainPassword, hash, (err, isMatch) => {
      if (err) throw err;
      console.log('Passwords match:', isMatch); // Should return true
    });
  });
});
