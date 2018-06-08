const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");

router.get("/test", (req, res) => {
  res.json({
    msg: "User route works"
  });
});

router.post("/signup", (req, res) => {
  const errors = {};
  console.log("Signup Route Triggered!");
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      res.status(404).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        telephone_number: req.body.telephone_number,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
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

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = {};
  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(doesMatch => {
      if (doesMatch) {
        const payload = { id: user.id, name: user.name };
        jwt.sign(payload, "secret", { expiresIn: 180000 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // res.json({
    //   id: req.user.id,
    //   name: req.user.name,
    //   email: req.user.email
    // });
    res.json({
      redirect: "/dashboard"
    });

    // res.redirect("/dashboard");
  }
);

module.exports = router;
