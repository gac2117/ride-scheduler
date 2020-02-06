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

// @route POST api/rides
// @desc Create a ride
// @access public
router.post('/', (req, res) => {
  const newRide = new Ride({
    origin: req.body.origin,
    destination: req.body.destination,
    date: req.body.date,
    riderName: req.body.riderName,
    time: req.body.time
  });
  newRide.save().then(ride => res.json(ride));
});

// @route DELETE api/rides/:id
// @desc Delete a ride
// @access public
router.delete('/:id', (req, res) => {
  Ride.findById(req.params.id)
    .then(ride => ride.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
