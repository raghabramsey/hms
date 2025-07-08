// models/AdminModel.js
const pool = require('../db');

const findAdminByEmail = async (email) => {
  const query = 'SELECT * FROM admins WHERE email = $1 AND is_active = TRUE';
  const values = [email];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  findAdminByEmail,
};
