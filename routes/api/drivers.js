const express = require('express');
const router = express.Router();

// Driver Model
const Driver = require('../../models/Driver');

// @route POST api/drivers
// @desc Register new driver
// @access public
router.post('/', (req, res) => {
  res.send('register');
});

module.exports = router;
