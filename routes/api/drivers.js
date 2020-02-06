const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// Driver Model
const Driver = require('../../models/Driver');

// @route GET api/drivers
// @desc Get all drivers
// @access public
router.get('/', (req, res) => {
  Driver.find().then(drivers => res.json(drivers));
});

// @route POST api/drivers
// @desc Register new driver
// @access public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // check for existing user
  Driver.findOne({ email }).then(driver => {
    if (driver) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    const newDriver = new Driver({
      name,
      email,
      password
    });

    // create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newDriver.password, salt, (err, hash) => {
        if (err) throw err;
        newDriver.password = hash;
        newDriver.save().then(driver => {
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
  });
});

module.exports = router;
