const express = require("express");
const mongoose = require("mongoose");
const app = express();
const AuthRoute = require("./routes/user.route");
app.use(express.json());
app.use("/auth", AuthRoute);

const PORT = 3000;
const uri = "mongodb://127.0.0.1:27017/auth-service";
mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening to port: ${PORT}`);
    });
    console.log("connected to mongo");
  })
  .catch((err) => {
    cons;
    console.log("error connecting to database", err);
  });
