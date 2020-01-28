const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DriverSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ride_ids: []
});

module.exports = Driver = mongoose.model('driver', DriverSchema);
