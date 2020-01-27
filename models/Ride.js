const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RideSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  riderName: {
    type: String,
    required: true
  }
});

module.exports = Ride = mongoose.model('ride', RideSchema);
