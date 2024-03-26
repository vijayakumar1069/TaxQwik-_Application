const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const userRouter = require("./Routes/user.Routes.js");
const mongoose = require("mongoose");
app.use(cors());
app.use(bodyparser.json());
app.use("/api", userRouter);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongo Db connected successfully   ");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, (req, res) => {
  console.log("port running", process.env.PORT);
});
