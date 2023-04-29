const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  subgroup: { type: String, required: true },
  topWeek: { type: Boolean, required: true },
  day: { type: mongoose.Schema.Types.ObjectId, ref: "Day", required: true },
  time: { type: mongoose.Schema.Types.ObjectId, ref: "Time", required: true },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
