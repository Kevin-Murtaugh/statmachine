const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const users = require("./routes/users");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = process.env.MONGO_URI || "mongodb://localhost/stat_machine";

mongoose.connect(db).then(() => console.log("Database connection Successful!"));
// Routes
app.use("/users", users);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

// About me Page

// Stat Page

// Login Page
