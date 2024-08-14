const User = require('../models/user');

const userControllers = {
  // create user
  register: async (req, res) => {
    try {
      const { firstName, lastName, phone, password } = req.body;

      if (!firstName || !lastName || !phone || !password) {
        return res.status(400).json({
          success: false,
          message: 'Missing input'
        });
      }

      const newUser = await User.create(req.body);
      return res.status(200).json({
        success: true,
        message: 'User created successfully',
        data: newUser
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
  }
};

module.exports = userControllers;
