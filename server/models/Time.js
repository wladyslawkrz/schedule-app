const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema({
  time: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Time", TimeSchema);
