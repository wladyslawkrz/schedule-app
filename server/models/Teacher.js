const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  teacherFullName: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Teacher", TeacherSchema);
