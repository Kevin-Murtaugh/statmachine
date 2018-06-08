const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// name, email, password, telephone number
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  telephone_number: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
