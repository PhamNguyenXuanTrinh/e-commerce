const User = require("../models/user");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userControllers = {
  // create user
  register: async (req, res) => {
    try {
      const { firstName, lastName, phone, password, email } = req.body;

      // Check for missing input
      if (!firstName || !lastName || !phone || !password || !email) {
        return res.status(400).json({
          success: false,
          message: "Missing input",
        });
      }

      // Validate email
      const isValid = validator.isEmail(email);
      if (!isValid) {
        return res.status(400).json({
          success: false,
          message: "Invalid email",
        });
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create user object with hashed password
      const newUser = await User.create({
        firstName,
        lastName,
        phone,
        email,
        password: hashedPassword, // Store the hashed password
      });

      return res.status(200).json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
    } catch (err) {

      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  },
  //login user
  login: async (req, res) => {
    const { email, password } = req.body;

    // Check for missing input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing email or password",
      });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: user, // You might want to omit the password field here
    });
  },
};

module.exports = userControllers;
