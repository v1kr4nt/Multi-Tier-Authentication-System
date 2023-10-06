const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb://127.0.0.1:27017/auth-service";
mongoose
  .connect(uri)
  .then((result) => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
