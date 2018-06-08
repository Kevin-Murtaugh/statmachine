const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const dashboard = require("./routes/dashboard");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = process.env.MONGO_URI || "mongodb://localhost/htau_nrem";

mongoose.connect(db).then(() => console.log("Database connection Successful!"));

// // Passport middleware
app.use(passport.initialize());
// // Passport Config
require("./config/passport")(passport);

app.use(express.static("client/build"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use("/users", users);

app.use(express.static(path.join(__dirname, "./Crypto")));
app.use("/dashboard", dashboard);

// app.get("/cryp", (req, res) => {
//   console.log(`The user is ${req.user}`);
//   res.send({
//     hello: "bonjour"
//   });
// });

// app.use("/dashboard", passport.authenticate("jwt", { session: false }));
// app.use("/dashboard", express.static(path.join(__dirname, "./Crypto")));

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {

// }

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// About me Page

// Stat Page

// Login Page
