const connectDB = require('../database/database');

const db = connectDB('users', 'admin', 'admin');

module.exports = db;