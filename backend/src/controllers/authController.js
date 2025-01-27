// authController.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Save user to DB
    res.status(201).json({ message: 'User created successfully' });
};

module.exports = { signup };
