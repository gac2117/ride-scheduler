const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RiderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ride_ids: []
});

module.exports = Rider = mongoose.model('rider', RiderSchema);
