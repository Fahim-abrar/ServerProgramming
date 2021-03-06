const mongoose = require('mongoose');
const MOSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
  tshirt: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  verificationCode: {
    type: String,
    required: true,
    unique: true,
  },
});

const MathOlympiad = mongoose.model('MathOlympiad', MOSchema);
module.exports = MathOlympiad;