const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");

// Authenticate the user

// POST users/signup
//  name, email, password, telephone_number

// POST users/login
// Compare password and if it matches respond with JWT token

router.get("/test", (req, res) => {
  res.json({
    msg: "User route works"
  });
});

router.post("/signup", (req, res) => {
  // req.body: name, email, password, telephone_number
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        telephone_number: req.body.telephone_number,
        password: req.body.password
      });
      // Create a new account for the user
      // salt the password
      // hash the password
      // save new user to the database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          // Store hash in your password DB.
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
