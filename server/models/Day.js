const mongoose = require("mongoose");

const DaySchema = new mongoose.Schema({
  day: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Day", DaySchema);
