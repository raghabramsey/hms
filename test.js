
const bcrypt = require('bcrypt');

const password = '$pring1sHere!#';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
