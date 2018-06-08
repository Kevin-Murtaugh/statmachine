const express = require("express");
const router = express.Router();
const passport = require("passport");
const path = require("path");
const app = express();

// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     // res.json({
//     //   res: "YESS!"
//     // });
//     // res.render();
//     // express.static(path.join(__dirname, "/../Crypto"));
//     // app.use(express.static(path.join(__dirname, "./Crypto")));
//     // return express.static(path.join(__dirname, "./Crypto"));
//     app.use(express.static(path.join(__dirname, "/../Crypto")));

//     res.sendFile(path.resolve(__dirname + "/../Crypto/crypto.html"));
//   }
// );

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log("You are an authenticated user");
    //Here I would like to serve crypto file
    // and from the front end just display it

    // train time

    // res.json({
    //   res: "YESS!"
    // });
    // res.render();
    // express.static(path.join(__dirname, "/../Crypto"));
    // app.use(express.static(path.join(__dirname, "./Crypto")));
    // return express.static(path.join(__dirname, "./Crypto"));
    // app.use(express.static(path.join(__dirname, "/../Crypto")));

    // app.use(
    //   // passport.authenticate("jwt", { session: false }),
    //   express.static(path.join(__dirname, "./Crypto"))
    // );

    // res.sendFile(path.resolve(__dirname + "/../Crypto/crypto.html"));
    res.sendFile(path.resolve(__dirname + "/../Crypto/temp.html"));
    // res.send({
    //   hello: "hi"
    // });
    // next();
  }
);

router.get("/test", (req, res) => {
  res.send({ hello: "hi" });
});

module.exports = router;
