const mongoose = require("mongoose");

const TypeOfSubjectSchema = new mongoose.Schema({
  typeOfSubject: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("TypeOfSubject", TypeOfSubjectSchema);
