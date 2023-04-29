const express = require("express");
const mongoose = require("mongoose");
const models = require("./models/index");

const app = express();
const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    "mongodb+srv://uladz:aboba2537@mern-blog.8gtlcmx.mongodb.net/Schedule?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connection to the MongoDB established"))
  .catch(() => console.error("An error occured"));

app.listen(PORT, () => {
  console.log(`Server is listening port ${PORT}`);
});
