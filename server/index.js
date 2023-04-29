const express = require("express");
const mongoose = require("mongoose");
const models = require("./models/index");

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://uladz:aboba2537@mern-blog.8gtlcmx.mongodb.net/Schedule?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection to the MongoDB established"))
  .catch(() => console.error("An error occured"));

app.post("/postData", async (req, res) => {
  const subjectName = req.body.subjectName;
  const teacher = req.body.teacher
  const typeOfSubject = req.body.typeOfSubject
  const newTeacher = new models.Subject({
    subjectName: subjectName,
    typeOfSubject: typeOfSubject,
    teacher: teacher,
  });

  const result = await newTeacher.save();
  res.status(201).send(result);
});

app.listen(PORT, () => {
  console.log(`Server is listening port ${PORT}`);
});
