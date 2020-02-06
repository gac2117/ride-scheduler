const express = require('express');
const router = express.Router();

// Rider Model
const Rider = require('../../models/Rider');

// @route POST api/riders
// @desc Register new rider
// @access public
router.post('/', (req, res) => {
  res.send('register');
});

module.exports = router;
