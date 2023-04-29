const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subjectName: {type:String, unique:true, required: true},
  teacher: {type: mongoose.Schema.Types.ObjectId, ref: "Teacher"}
});

export default mongoose.model("Subject", SubjectSchema);
