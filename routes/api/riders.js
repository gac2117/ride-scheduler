const express = require('express');
const router = express.Router();

// Rider Model
const Rider = require('../../models/Rider');

// @route GET api/riders
// @desc Get all riders
// @access public
router.get('/', (req, res) => {
  Rider.find()
    .sort({ name: -1 })
    .then(riders => res.json(riders));
});

// @route POST api/riders
// @desc Create a rider
// @access public
router.post('/', (req, res) => {
  const newRider = new Rider({
    name: req.body.name
  });
  newRider.save().then(rider => res.json(rider));
});

// @route DELETE api/riders/:id
// @desc Delete a rider
// @access public
router.delete('/:id', (req, res) => {
  Rider.findById(req.params.id)
    .then(rider => rider.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
