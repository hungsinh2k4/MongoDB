const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const user = mongoose.model("User", userSchema);
console.log("User model created");

module.exports = user;
