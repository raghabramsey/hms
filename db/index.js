// db/index.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // or define each property like user, password, etc.
});

module.exports = pool;
