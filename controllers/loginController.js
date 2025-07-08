const bcrypt = require('bcrypt');
const { findAdminByEmail } = require('../models/adminModel');

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await findAdminByEmail(email);
    if (!admin) {
      console.log('Admin not found.');
      return res.status(401).json({ error: 'Invalid email' });
    }

    const match = await bcrypt.compare(password, admin.hashed_password);

    if (!match) {
      console.log('Incorrect password.');
      return res.status(401).json({ error: 'Invalid password' });
    }

    console.log('Login successful!');
    res.json({
      message: 'Login successful',
      admin: { id: admin.id, email: admin.email, role: admin.role },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { loginAdmin };
