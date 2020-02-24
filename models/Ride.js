const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RideSchema = new Schema({
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  riderName: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'driver'
  }
});

module.exports = Ride = mongoose.model('ride', RideSchema);
