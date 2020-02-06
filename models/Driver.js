const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DriverSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Driver = mongoose.model('driver', DriverSchema);
