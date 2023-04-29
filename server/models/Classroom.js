const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema({
  classroom: { type: Number, required: true },
  building: { type: Number, required: true },
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
