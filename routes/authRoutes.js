// routes/authRoutes.js
const express = require('express');
const { loginAdmin } = require('../controllers/loginController');

const router = express.Router();

router.post('/login', loginAdmin);

module.exports = router;
