const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  typeOfSubject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TypeOfSubject",
    required: false,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: false,
  },
});

module.exports = mongoose.model("Subject", SubjectSchema);
