const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const User = require("../model/user");

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("username").notEmpty(),
    body("password").notEmpty(),
  ],
  async (req, res) => {
    try {
      const doesExist = await User.findOne({ email: req.body.email });
      if (doesExist) {
        res.status(401).json({ message: "User already exists" });
      }
      const user = new User(req.body);
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something went wrong." });
    }
  }
);

router.get("/get", async (req, res) => {
  const data = await User.findOne({});
  res.status(200).send(data);
});

module.exports = router;
