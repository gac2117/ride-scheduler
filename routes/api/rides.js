const express = require('express');
const router = express.Router();

// Ride Model
const Ride = require('../../models/Ride');

// @route GET api/rides
// @desc Get all rides
// @access public
router.get('/', (req, res) => {
  Ride.find()
    .sort({ date: -1 })
    .then(rides => res.json(rides));
});

module.exports = router;
