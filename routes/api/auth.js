const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Driver Model
const Driver = require('../../models/Driver');

// @route POST api/auth
// @desc Auth driver
// @access public
router.post('/', (req, res) => {
  const { email, password } = req.body;

  // simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // check for existing user
  Driver.findOne({ email }).then(driver => {
    if (!driver) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    // Validate password
    bcrypt.compare(password, driver.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: 'Invalid password' });
      jwt.sign(
        { id: driver.id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            driver: {
              id: driver.id,
              name: driver.name,
              email: driver.email
            }
          });
        }
      );
    });
  });
});

module.exports = router;
