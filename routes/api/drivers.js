const express = require('express');
const router = express.Router();

// Driver Model
const Driver = require('../../models/Driver');

// @route GET api/drivers
// @desc Get all drivers
// @access public
router.get('/', (req, res) => {
  Driver.find()
    .sort({ name: -1 })
    .then(drivers => res.json(drivers));
});

// @route POST api/drivers
// @desc Create a driver
// @access public
router.post('/', (req, res) => {
  const newDriver = new Driver({
    name: req.body.name
  });
  newDriver.save().then(driver => res.json(driver));
});

// @route PUT api/drivers/:id
// @desc Update a driver
// @access public
// router.put('/:id', (req, res) => {

// });

// @route DELETE api/driver/:id
// @desc Delete a driver
// @access public
router.delete('/:id', (req, res) => {
  Driver.findById(req.params.id)
    .then(driver => driver.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
