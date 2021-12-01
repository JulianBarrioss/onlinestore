const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$d9eM5CJ2m5nRP4sFgLsol.yBp/2nAReODovbbN9BvPGDDoi0FBJ/G';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
